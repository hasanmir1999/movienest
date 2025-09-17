"use client";
import { Toaster } from "react-hot-toast";
export default function ToastLoc() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          className: "bg-gray-500",
          style: {
            backgroundColor: "rgb(31 41 55)",
            color: "rgb(209 213 219)",
            border: '1px solid rgb(209 213 219)',
            padding: "8px 16px",
            borderRadius: "8px",
          },
        }}
      />
    </>
  );
}
