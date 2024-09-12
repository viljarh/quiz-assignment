
import { Link } from 'expo-router';
import { View, Text } from 'react-native';
import styles from '@/constants/Styles';

const lastquestion = () => {


    const question6 = "What is the default port for React Native?";

    const correctAnswer6 = "8081";
    const wrongAnswers6 = ["3000", "5000", "8080"];

    const allAnswers6 = [correctAnswer6, ...wrongAnswers6].sort(
        () => Math.random() - 0.5
    );

  return (
    <View style={styles.container}>
        <Text>{question6}</Text>
        {allAnswers6.map((answer, index) => (
            <Link key={index} href="/summary" style={styles.button}>
            {answer}
            </Link>
        ))}
    </View>
  )
}

export default lastquestion