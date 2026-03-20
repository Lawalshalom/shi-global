"use client";
import { useEffect } from "react";

export default function Toast() {
  useEffect(() => {
    // Expose global show function
    (window as any).__showToast = (msg: string) => {
      const el = document.getElementById("global-toast");
      if (!el) return;
      el.textContent = msg;
      el.classList.add("show");
      setTimeout(() => el.classList.remove("show"), 3500);
    };
  }, []);

  return (
    <div
      id="global-toast"
      className="toast"
      role="alert"
      aria-live="assertive"
    />
  );
}
