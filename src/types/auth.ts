export type ResponseWrapper<T> = {
  data: T;
};
export type SigninResponse = ResponseWrapper<{
  token: string;
  user: {
    email: string;
    full_name: string;
    highschool: string;
    highschool_year: string;
    choosen_university_one: string;
    choosen_major_one: string;
    phone_number: string;
    onboard_date: string;
  };
}>;

export type SigninRequest = {
  phone_number: string;
  otp: string;
};

export type SendOTPRequest = {
  phone_number: string;
};
