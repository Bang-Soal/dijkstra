import { LoginResponse, User } from "@/types";
import { PayloadAction, Slice, createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { authApi } from "../api/authApi";

interface UserSliceState {
  token: string | null;
  user: User | null;
}

const initialState: UserSliceState = {
  token: null,
  user: null,
};

const userSlice: Slice<UserSliceState> = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      storage.removeItem("persist:root");
      window.localStorage.removeItem("token");
      state.user = null;
      state.token = null;
      window.location.pathname = "/signin";
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }: PayloadAction<LoginResponse>) => {
        const { token } = payload;
        state.token = token;
      },
    ),
      builder.addMatcher(
        authApi.endpoints.getProfile.matchFulfilled,
        (state, { payload }: PayloadAction<User>) => {
          state.user = { ...payload };
        },
      );
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
