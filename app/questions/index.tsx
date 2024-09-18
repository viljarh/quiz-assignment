import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { quizQuestions } from "@/constants/questions";
import { router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import * as Progress from "react-native-progress";

// Function to shuffle the question order
const shuffleQuestions = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5);
};

// Question page
const QuestionPage = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<any[]>([]);
  const [score, setScore] = useState(0);

  // Hook runs when it first loads to shuffle and select 20 questions
  useEffect(() => {
    const shuffled = shuffleQuestions(quizQuestions).slice(0, 20);
    setShuffledQuestions(shuffled);
  }, []);

  // Handles what happens when user selects an answer
  const handleNextQuestion = (selectedAnswer: string) => {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctOption;

    // Updates the answers array with their selected answer
    setUserAnswers([
      ...userAnswers,
      {
        question: currentQuestion.question,
        selectedAnswer,
        correctUserAnswer: currentQuestion.correctOption,
        isCorrect,
      },
    ]);

    // If the answer was correct the score updates
    if (isCorrect) {
      setScore(score + 1);
    }

    // Checks if there is any more questions
    if (currentQuestionIndex + 1 < shuffledQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
      router.push({
        pathname: "/result",
        params: {
          score: score + (isCorrect ? 1 : 0),
          userAnswers: JSON.stringify([
            ...userAnswers,
            {
              question: currentQuestion.question,
              selectedAnswer,
              correctAnswer: currentQuestion.correctOption,
              isCorrect,
            },
          ]),
        },
      });
    }
  };

  // Gets the users progress percentage for the progressbar
  const progress =
    shuffledQuestions.length > 0
      ? (currentQuestionIndex + 1) / shuffledQuestions.length
      : 0;

  // Loading message
  if (shuffledQuestions.length === 0) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center">
        <Text>Loading questions...</Text>
      </SafeAreaView>
    );
  }

  // Gets the current question to display
  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  return (
    <SafeAreaView className="flex-1 flex-col justify-center items-center p-5">
      <TouchableOpacity
        onPress={() => router.back()}
        style={{ position: "absolute", top: 80, left: 20 }}
      >
        <AntDesign name="left" size={24} color="black" />
      </TouchableOpacity>
      <Progress.Bar
        progress={progress}
        width={300}
        height={20}
        color="#000"
        borderRadius={10}
      />
      <View className="p-12 w-34">
        <Text className="font-bold text-3xl text-center">
          {currentQuestion.question}
        </Text>
      </View>

      {currentQuestion.options.map((option: string, index: number) => (
        <TouchableOpacity
          key={index}
          className="bg-gray-200 border border-gray-400 rounded-lg p-5 mb-5 w-3/4"
          onPress={() => handleNextQuestion(option)}
        >
          <Text>{option}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};
export default QuestionPage;
