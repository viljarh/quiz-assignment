import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router"; 
import styles from "@/constants/Styles";

const thirdquestion = () => {
  const question3 = "What component is used to display text in React Native?";

  const correctAnswer3 = "Text";
  const wrongAnswers3 = ["View", "Image", "TextInput"];

  const allAnswers3 = [correctAnswer3, ...wrongAnswers3].sort(
    () => Math.random() - 0.5
  );

  return (
    <View>
      <Text>{question3}</Text>
      {allAnswers3.map((answer, index) => (
         <Link key={index} href={"/fourthpage"} style={styles.button}>
         {answer}
       </Link>
      ))}
    </View>
  );
};

export default thirdquestion;
