import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { quizQuestions } from "@/constants/questions";
import { router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import * as Progress from "react-native-progress";

const shuffleQuestions = (array: any[]) => {
	return array.sort(() => Math.random() - 0.5);
};

const QuestionPage = () => {
	const [shuffledQuestions, setShuffledQuestions] = useState<any[]>([]);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [quizCompleted, setQuizCompleted] = useState(false);
	const [userAnswers, setUserAnswers] = useState<any[]>([]);
	const [score, setScore] = useState(0);

	useEffect(() => {
		const shuffled = shuffleQuestions(quizQuestions).slice(0, 20);
		setShuffledQuestions(shuffled);
	}, []);

	const handleNextQuestion = (selectedAnswer: string) => {
		const currentQuestion = shuffledQuestions[currentQuestionIndex];
		const isCorrect = selectedAnswer === currentQuestion.correctOption;

		setUserAnswers([
			...userAnswers,
			{
				question: currentQuestion.question,
				selectedAnswer,
				correctUserAnswer: currentQuestion.correctOption,
				isCorrect,
			},
		]);

		if (isCorrect) {
			setScore(score + 1);
		}

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

	const progress =
		shuffledQuestions.length > 0
			? (currentQuestionIndex + 1) / shuffledQuestions.length
			: 0;

	if (shuffledQuestions.length === 0) {
		return (
			<SafeAreaView className="flex-1 justify-center items-center">
				<Text>Loading questions...</Text>
			</SafeAreaView>
		);
	}

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
