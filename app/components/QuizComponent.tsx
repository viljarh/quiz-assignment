import { View, Text, Button } from "react-native";
import { useState } from "react";
import quizData from "../data/QuizData";
import styles from "@/constants/Styles";

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
        <Text>
          Question {index + 1}:{quizData[index].question}
        </Text>
        <Text>
          Correct Answer:
          {quizData[index].correct}
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
      <Text>QuizComponent</Text>
      {quizOver ? (
        <View>
          <Text>Quiz Over! Your score is {score}.</Text>
          {displaySummary}
          <Button title="Restart Quiz" onPress={restartQuiz} />
        </View>
      ) : (
        <View>
          <Text>{randomOptions[currentQuestionIndex].question}</Text>
          {randomOptions[currentQuestionIndex].options.map((answer, index) => (
            <Button
              key={index}
              title={answer}
              onPress={() => handleAnswer(answer)}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default QuizComponent;
