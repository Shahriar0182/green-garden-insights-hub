
import { useEffect, useState } from "react";

// Unique ID for toast
let id = 0;
function generateId() {
  return id++;
}

// Default toast duration
const DEFAULT_TOAST_DURATION = 5000;

const TOAST_LIMIT = 20;
const ACTION_TOAST_LIMIT = 10;

const toasts = [];
const listeners = [];

function createToast(data) {
  const toast = {
    id: data.id || generateId(),
    title: data.title,
    description: data.description,
    action: data.action,
    type: data.type,
    duration: data.duration || DEFAULT_TOAST_DURATION,
    ...data,
  };

  toasts.push(toast);
  listeners.forEach((listener) => {
    listener(toasts);
  });

  return toast;
}

function dismissToast(toastId) {
  const index = toasts.findIndex((toast) => toast.id === toastId);
  
  if (index >= 0) {
    toasts.splice(index, 1);
    listeners.forEach((listener) => {
      listener(toasts);
    });
  }
}

function useToast() {
  const [localToasts, setLocalToasts] = useState(toasts);

  useEffect(() => {
    listeners.push(setLocalToasts);

    return () => {
      const index = listeners.indexOf(setLocalToasts);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, []);

  return {
    toasts: localToasts,
    toast: createToast,
    dismiss: dismissToast,
  };
}

function toast(props) {
  return createToast(props);
}

toast.dismiss = dismissToast;

export { useToast, toast };
