export type SigninResponse = {
  token: string;
};

export type SigninRequest = {
  phone_number: string;
  otp: string;
};

export type RegisterResponse = {};

export type SendOTPRequest = {
  phone_number: string;
};
