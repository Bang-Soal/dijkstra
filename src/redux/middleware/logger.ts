"use client";
import type { Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { isRejectedWithValue } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action: any) => {
    if (isRejectedWithValue(action)) {
      if (action.meta.arg.endpointName == "getProfile") {
        window.location.href = "/onboarding";
        return;
      } else {
        const errorData =
          action.payload.data?.error?.message ||
          action.payload.data?.message ||
          action.error.message;

        if (Array.isArray(errorData)) {
          errorData.forEach((message) => {
            toast.error(message);
          });
        } else if (typeof errorData === "string") {
          toast.error(errorData);
        }
      }
    }

    return next(action);
  };
