export type OnboardRequest = {
  full_name: string;
  highschool: string;
  highschool_year: string;
  email: string;
  phone_number: string;
  referral_code?: string;
  source: string;
  choosen_university_one: string;
  choosen_major_one: string;
  choosen_university_two?: string;
  choosen_major_two?: string;
  choosen_university_three?: string;
  choosen_major_three?: string;
};

export type User = OnboardRequest & {
  id: string;
  onboard_date: string;
};