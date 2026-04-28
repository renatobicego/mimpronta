"use client";

export function getLocalStorage(key: string, defaultValue: unknown) {
  if (typeof window === "undefined") return defaultValue;
  const stickyValue = localStorage.getItem(key);
  return stickyValue !== null && stickyValue !== "undefined"
    ? JSON.parse(stickyValue)
    : defaultValue;
}

export function setLocalStorage(key: string, value: unknown) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(value));
}
