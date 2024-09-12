import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import styles from "@/constants/Styles";

const firstpage = () => {
  const question = "What does React Native use instead of css?";

  const correctAnswer = "Javascript";
  const wrongAnswers = ["HTML", "Figma", "XML"];
  const allAnswers = [correctAnswer, ...wrongAnswers].sort(
    () => Math.random() - 0.5
  );

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text>{question}</Text>
        {allAnswers.map((answer, index) => (
          <Link key={index} href={"/secondpage"} style={styles.button}>
            {answer}
          </Link>
        ))}
      </View>
    </SafeAreaProvider>
  );
};

export default firstpage;
