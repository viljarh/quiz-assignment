import { View, Text, Pressable } from "react-native";
import { useState } from "react";
import quizData from "../data/QuizData";
import styles from "@/constants/Styles";
import { StyleSheet } from "react-native";

const QuizComponent = () => {
  const allQuestions = quizData;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const [quizOver, setQuizOver] = useState(false);

  const randomOptions = quizData.map((question) => {
    return {
      ...question,
      options: question.options.sort(() => Math.random() - 0.5),
    };
  });

  const handleAnswer = (selectedAnswer: string) => {
    if (selectedAnswer === allQuestions[currentQuestionIndex].correct) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < allQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizOver(true);
    }
  };

  const displaySummary = quizData.map((question, index) => {
    return (
      <View key={index}>
        <Text style={summaryStyles.summaryQuestions}>
          Question {index + 1}:{quizData[index].question}
        </Text>
        <Text style={summaryStyles.correctAnswerLine}>
          Correct Answer:
          {" "}{quizData[index].correct}
        </Text>
      </View>
    );
  });

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizOver(false);
  };

  return (
    <View style={styles.container}>
      {quizOver ? (
        <View>
          <Text style={summaryStyles.scoreText}>You scored {score}/6 points.</Text>
          {displaySummary}
          <Pressable onPress={restartQuiz} style={styles.button}>
            <Text style={styles.textStyles}>Restart Quiz</Text>
          </Pressable>
        </View>
      ) : (
        <View>
          <Text style={styles.textStyles}>
            {randomOptions[currentQuestionIndex].question}
          </Text>
          {randomOptions[currentQuestionIndex].options.map((answer, index) => (
            <Pressable onPress={() => handleAnswer(answer)} style={styles.button}>
              <Text key={index} style={styles.textStyles}>{answer}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
};

const summaryStyles = StyleSheet.create({
  scoreText: {

    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    
  },
  summaryQuestions: {
    textAlign: "center",
    fontSize: 16,
  },
  correctAnswerLine: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  }
});

export default QuizComponent;
