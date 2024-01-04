import { ResponseWrapper } from ".";

export type UserOnboardRequest = {
  full_name: string;
  highschool: string;
  highschool_year: string;
  email: string;
  referral_code?: string;
  source: string;
  choosen_university_one: string;
  choosen_major_one: string;
  choosen_university_two?: string;
  choosen_major_two?: string;
  choosen_university_three?: string;
  choosen_major_three?: string;
};

export type User = {
  email: string;
  full_name: string;
  highschool: string;
  highschool_year: string;
  choosen_university_one: string;
  choosen_major_one: string;
  phone_number: string;
  onboard_date: string;
};

export type LeaderboardUser = Pick<User, "full_name" | "highschool"> & {
  first_university: string;
  first_major: string;
  second_university?: string;
  second_major?: string;
  third_university?: string;
  third_major?: string;
};

export type ProfileResponse = ResponseWrapper<User>;
