import {View, Text} from 'react-native'
import styles from "@/constants/Styles";

const secondpage = () => {


  const question2 = "Which company developed React Native?";

  const correctAnswer2 = "Facebook";
  const wrongAnswers2 = ["Google", "Apple", "Microsoft"];

  const allAnswers2 = [correctAnswer2, ...wrongAnswers2].sort(
    () => Math.random() - 0.5
  );

  return (
    <View style={styles.container}>
        <Text>{question2}</Text>
        {allAnswers2.map((answer, index) => (
          <Text key={index} style={styles.button}>
            {answer}
          </Text>
        ))}
    </View>
  )
}

export default secondpage