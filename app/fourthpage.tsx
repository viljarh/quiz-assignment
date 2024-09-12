import { View, Text } from "react-native";
import { Link } from "expo-router";
import styles from "@/constants/Styles";

const fourthpage = () => {



    const question4 = "What layout system does react native used by default?";

    const correctAnswer4 = "Flexbox";
    const wrongAnswers4 = ["Grid", "Bootstrap", "Material UI"];

    const allAnswers4 = [correctAnswer4, ...wrongAnswers4].sort(
        () => Math.random() - 0.5
    );

  return (
    <View style={styles.container}>
      <Text>{question4}</Text>
        {allAnswers4.map((answer, index) => (
            <Link key={index} href="/fifthquestion" style={styles.button}>
            {answer}
            </Link>
        ))}
    </View>
  );
};

export default fourthpage;
