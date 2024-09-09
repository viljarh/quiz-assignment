import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { quizQuestions } from "@/constants/questions";

const shuffleQuestions = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5);
};

const QuestionPage = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState<any[]>([]);

  useEffect(() => {
    const shuffled = shuffleQuestions(quizQuestions).slice(0, 20);
    setShuffledQuestions(shuffled);
  }, []);

  return (
    <SafeAreaView className="flex-1 flex-col justify-center items-center p-5">
      <View className="p-12 w-34">
        <Text className="font-bold text-3xl">Question</Text>
      </View>

      <View className="m-2 p-4">
        <Text className="p-3 text-lg">Option 1</Text>
        <Text className="p-3 text-lg">Option 2</Text>
        <Text className="p-3 text-lg">Option 3</Text>
        <Text className="p-3 text-lg">Option 4</Text>
      </View>

      <TouchableOpacity className="mt-44 border rounded-lg bg-emerald-400 px-10 py-4">
        <Text>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default QuestionPage;
