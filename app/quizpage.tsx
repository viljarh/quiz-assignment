import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import styles from "@/constants/Styles";
import QuizComponent from "./components/QuizComponent";

const firstpage = () => {

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={styles.textStyles}>Click an option</Text>
       <QuizComponent />
      </View>
    </SafeAreaProvider>
  );
};

export default firstpage;
