export type ResponseWrapper<T> = {
  data: T;
};
export type SigninResponse = ResponseWrapper<{
  token: string;
}>;

export type SigninRequest = {
  phone_number: string;
  otp: string;
};

export type SendOTPRequest = {
  phone_number: string;
};
