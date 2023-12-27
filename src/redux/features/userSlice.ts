import { ProfileResponse, SigninResponse, User } from "@/types";
import { PayloadAction, Slice, createSlice, isAnyOf } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { authApi } from "../api/authApi";

interface UserSliceState {
  token: string | null;
  profile: User | null;
  isLoggedIn?: boolean;
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
      state.isLoggedIn = false;
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
        const token = payload.data.token;
        state.token = token;
        state.isLoggedIn = true;
      },
    ),
      builder.addMatcher(
        authApi.endpoints.getProfile.matchFulfilled,
        (state, { payload }: PayloadAction<ProfileResponse>) => {
          state.profile = { ...payload.data };
        },
      );
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
