import { SigninResponse, User } from "@/types";
import { PayloadAction, Slice, createSlice, isAnyOf } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { authApi } from "../api/authApi";

interface UserSliceState {
  token: string | null;
  profile: User | null;
}

const initialState: UserSliceState = {
  token: null,
  profile: null,
};

const userSlice: Slice<UserSliceState> = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      storage.removeItem("persist:root");
      window.localStorage.removeItem("token");
      state.profile = null;
      state.token = null;
      window.location.pathname = "/signin";
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      isAnyOf(
        authApi.endpoints.login.matchFulfilled,
        authApi.endpoints.register.matchFulfilled,
      ),
      (state, { payload }: PayloadAction<SigninResponse>) => {
        const { token } = payload;
        state.token = token;
      },
    ),
      builder.addMatcher(
        authApi.endpoints.getProfile.matchFulfilled,
        (state, { payload }: PayloadAction<User>) => {
          state.profile = { ...payload };
        },
      );
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
