import { View, Text } from 'react-native';
import {Link} from 'expo-router';
import styles from '@/constants/Styles';

const fifthquestion = () => {


    const question5 = "What hook is used to manage state in a functional component in React Native?";

    const correctAnswer5 = "useState";
    const wrongAnswers5 = ["useEffect", "useContext", "useReducer"];

    const allAnswers5 = [correctAnswer5, ...wrongAnswers5].sort(
        () => Math.random() - 0.5
    );

  return (
    <View style={styles.container}>
        <Text>{question5}</Text>
        {allAnswers5.map((answer, index) => (
            <Link key={index} href="/lastquestion" style={styles.button}>
            {answer}
            </Link>
        ))}
    </View>
  )
}

export default fifthquestion