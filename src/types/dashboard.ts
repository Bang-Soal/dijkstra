import { ResponseWrapper } from ".";

export type HeaderDashboardResponse = ResponseWrapper<{
  finished: {
    done: number;
    total: number;
    percentage: number;
  };
  accuracy: {
    percentage: number;
    correct_answers: number;
    total_attempted_question: number;
  };
}>;
