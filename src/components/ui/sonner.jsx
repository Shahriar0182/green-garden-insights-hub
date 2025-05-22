
import React from "react";
import { Toaster as SonnerToaster } from "sonner";
import { cn } from "@/lib/utils";

const Toaster = ({ ...props }) => {
  // Use a local theme value instead of importing from next-themes
  const theme = document.documentElement.classList.contains("dark") ? "dark" : "light";

  return (
    <SonnerToaster
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

// Export the component and re-export toast from sonner
export { Toaster }
export { toast } from "sonner";
