export type OnboardRequest = {
  full_name: string;
  highschool: string;
  choosen_university_one: string;
  phone_number: string;
  referral_code?: string;
  source: string;
  choosen_major_one: string;
  highschool_year: string;
  choosen_university_two?: string;
  choosen_major_two?: string;
  choosen_university_three?: string;
  choosen_major_three?: string;
};

export type User = OnboardRequest & {
  id: string;
  onboard_date: string;
};
