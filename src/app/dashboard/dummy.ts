import { TOQuestionCardI } from "./elements/TOQuestionCard";

export const DUMMY_STATS = [
  {
    subject: {
      name: "PU",
      icon: "/icons/Brain.svg",
    },
    totalSoal: 400,
    feedbacks: [
      { topic: "Barisan Bilangan", soal_benar: 2, soal_dikerjakan: 200 },
      { topic: "Silogisme", soal_benar: 2, soal_dikerjakan: 200 },
    ],
  },
  {
    subject: {
      name: "PK",
      icon: "/icons/MathOperations.svg",
    },
    totalSoal: 400,
    feedbacks: [
      { topic: "Barisan Bilangan", soal_benar: 2, soal_dikerjakan: 200 },
      { topic: "Silogisme", soal_benar: 2, soal_dikerjakan: 200 },
    ],
  },
  {
    subject: { name: "PPU", icon: "/icons/LightbulbFilament.svg" },
    totalSoal: 15,
    feedbacks: [],
  },
  {
    subject: {
      name: "PBM",
      icon: "/icons/BookOpenText.svg",
    },
    totalSoal: 400,
    feedbacks: [
      { topic: "Barisan Bilangan", soal_benar: 2, soal_dikerjakan: 200 },
      { topic: "Silogisme", soal_benar: 2, soal_dikerjakan: 200 },
    ],
  },
];

export const DUMMY_TO_AVG = [
  {
    subject: {
      name: "PU",
      icon: "/icons/Brain.svg",
    },
    average_score: 780,
    highest_score: 780,
    lowest_score: 780,
    feedbacks: [
      { topic: "Barisan Bilangan", soal_benar: 2, soal_dikerjakan: 200 },
      { topic: "Silogisme", soal_benar: 2, soal_dikerjakan: 200 },
    ],
  },
  {
    subject: {
      name: "PK",
      icon: "/icons/MathOperations.svg",
    },
    average_score: 780,
    highest_score: 780,
    lowest_score: 780,
    feedbacks: [
      { topic: "Barisan Bilangan", soal_benar: 2, soal_dikerjakan: 200 },
      { topic: "Silogisme", soal_benar: 2, soal_dikerjakan: 200 },
    ],
  },

  {
    subject: {
      name: "PK",
      icon: "/icons/MathOperations.svg",
    },
    average_score: 780,
    highest_score: 780,
    lowest_score: 780,
    feedbacks: [
      { topic: "Barisan Bilangan", soal_benar: 2, soal_dikerjakan: 200 },
      { topic: "Silogisme", soal_benar: 2, soal_dikerjakan: 200 },
    ],
  },
  {
    subject: {
      name: "PBM",
      icon: "/icons/BookOpenText.svg",
    },
    average_score: 780,
    highest_score: 780,
    lowest_score: 780,
    feedbacks: [
      { topic: "Barisan Bilangan", soal_benar: 2, soal_dikerjakan: 200 },
      { topic: "Silogisme", soal_benar: 2, soal_dikerjakan: 200 },
    ],
  },
];

export const DUMMY_WRONG_ANSWERS: TOQuestionCardI[] = [
  {
    title: "Understanding Photosynthesis",
    subject: "Biology",
    topic: "Plant Processes",
    content: "Which part of the plant conducts photosynthesis?",
    choices: [
      { choice_id: "a1", content: "Roots", key: "A" },
      { choice_id: "a2", content: "Stems", key: "B" },
      { choice_id: "a3", content: "Leaves", key: "C" },
      { choice_id: "a4", content: "Flowers", key: "D" },
    ],
    answer: "a2",
  },
  {
    title: "Exploring Historical Events",
    subject: "History",
    topic: "World Wars",
    content: "In which year did World War II begin?",
    choices: [
      { choice_id: "b1", content: "1914", key: "A" },
      { choice_id: "b2", content: "1939", key: "B" },
      { choice_id: "b3", content: "1945", key: "C" },
      { choice_id: "b4", content: "1935", key: "D" },
    ],
    answer: "b1",
  },
  {
    title: "Fundamentals of Mathematics",
    subject: "Mathematics",
    topic: "Algebra",
    content: "Solve for x: 2x + 5 = 15",
    choices: [
      { choice_id: "c1", content: "x = 5", key: "A" },
      { choice_id: "c2", content: "x = 10", key: "B" },
      { choice_id: "c3", content: "x = 15", key: "C" },
      { choice_id: "c4", content: "x = 20", key: "D" },
    ],
    answer: "c3",
  },
  {
    title: "Principles of Chemistry",
    subject: "Chemistry",
    topic: "Acids and Bases",
    content: "What is the pH level of water?",
    choices: [
      { choice_id: "d1", content: "3", key: "A" },
      { choice_id: "d2", content: "5", key: "B" },
      { choice_id: "d3", content: "7", key: "C" },
      { choice_id: "d4", content: "9", key: "D" },
    ],
    answer: "d4",
  },
  {
    title: "Discovering Literature",
    subject: "English",
    topic: "Literary Devices",
    content: "Which figure of speech is an exaggerated statement?",
    choices: [
      { choice_id: "e1", content: "Metaphor", key: "A" },
      { choice_id: "e2", content: "Simile", key: "B" },
      { choice_id: "e3", content: "Hyperbole", key: "C" },
      { choice_id: "e4", content: "Personification", key: "D" },
    ],
    answer: "e1",
  },
];
