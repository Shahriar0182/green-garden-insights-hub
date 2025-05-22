
import * as React from "react";

const TOAST_LIMIT = 3;
const TOAST_REMOVE_DELAY = 1000000;

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
};

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

const toastTimeouts = new Map();

const listeners = [];

function dispatch(action) {
  listeners.forEach((listener) => {
    listener(action);
  });
}

function toast({
  variant = "default",
  title,
  description,
  action,
  ...props
}) {
  const id = genId();

  const update = (props) =>
    dispatch({
      type: actionTypes.UPDATE_TOAST,
      toast: { ...props, id },
    });

  const dismiss = () =>
    dispatch({
      type: actionTypes.DISMISS_TOAST,
      toastId: id,
    });

  dispatch({
    type: actionTypes.ADD_TOAST,
    toast: {
      id,
      variant,
      title,
      description,
      action,
      ...props,
    },
  });

  return {
    id,
    dismiss,
    update,
  };
}

function useToast() {
  const [state, setState] = React.useState([]);

  React.useEffect(() => {
    function handleChange(action) {
      if (action.type === actionTypes.ADD_TOAST) {
        setState((state) => {
          if (state.length >= TOAST_LIMIT) {
            dispatch({
              type: actionTypes.DISMISS_TOAST,
              toastId: state[0].id,
            });
          }
          return [...state, action.toast];
        });
      }

      if (action.type === actionTypes.UPDATE_TOAST) {
        setState((state) => {
          const { toast } = action;
          return state.map((t) => (t.id === toast.id ? { ...t, ...toast } : t));
        });
      }

      if (action.type === actionTypes.DISMISS_TOAST) {
        const { toastId } = action;

        if (toastId) {
          setState((state) => {
            const newState = state.map((t) =>
              t.id === toastId
                ? {
                    ...t,
                    open: false,
                  }
                : t
            );
            return newState;
          });
        } else {
          setState((state) =>
            state.map((t) => ({
              ...t,
              open: false,
            }))
          );
        }
      }

      if (action.type === actionTypes.REMOVE_TOAST) {
        if (action.toastId) {
          setState((state) => state.filter(({ id }) => id !== action.toastId));
        } else {
          setState([]);
        }
      }
    }

    listeners.push(handleChange);
    return () => {
      const index = listeners.indexOf(handleChange);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, []);

  React.useEffect(() => {
    state.forEach((toast) => {
      if (toast.open === false && !toastTimeouts.has(toast.id)) {
        toastTimeouts.set(
          toast.id,
          setTimeout(() => {
            dispatch({
              type: actionTypes.REMOVE_TOAST,
              toastId: toast.id,
            });
          }, TOAST_REMOVE_DELAY)
        );
      }
    });

    return () => {
      toastTimeouts.forEach((timeout) => clearTimeout(timeout));
      toastTimeouts.clear();
    };
  }, [state]);

  return {
    toasts: state,
    toast,
    dismiss: (toastId) => dispatch({ type: actionTypes.DISMISS_TOAST, toastId }),
  };
}

export { useToast, toast };
