"use client";
import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { MiddlewareAPI, Middleware, Action } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action: any) => {
    if (isRejectedWithValue(action)) {
      toast.error(`${action?.payload?.error?.message || action.error.message}`);
    }

    return next(action);
  };
