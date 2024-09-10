import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";

const ResultPage = () => {
  const { score, userAnswers } = useLocalSearchParams();
  const parsedAnswer = Array.isArray(userAnswers)
    ? JSON.parse(userAnswers[0] || "[]")
    : JSON.parse(userAnswers || "[]");

  return (
    <SafeAreaView className="flex-1 p-4 mt-10 items-center">
      <Text className="text-3xl font-bold mb-3">Quiz Completed!</Text>
      <Text className="font-semibold text-gray-700 text-lg">
        Score: {score} of 20
      </Text>

      <ScrollView className="flex-1">
        {parsedAnswer.map((answer: any, index: number) => (
          <View key={index} className="mb-3 mt-3 p-3">
            <Text className="text-lg font-bold">
              {index + 1}. {answer.question}
            </Text>
            <Text className="font-semibold">
              Your Answer:{" "}
              <Text style={{ color: answer.isCorrect ? "green" : "red" }}>
                {answer.selectedAnswer}
              </Text>
            </Text>
            {!answer.isCorrect && (
              <Text>Correct Answer: {answer.correctUserAnswer}</Text>
            )}
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity
        className="bg-blue-300 mt-5 p-5 rounded-lg"
        onPress={() => router.push("/")}
      >
        <Text className="font-bold">Back to Home Page</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ResultPage;
