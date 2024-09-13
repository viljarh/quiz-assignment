import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import styles from "@/constants/Styles";
import QuizComponent from "./components/QuizComponent";
import { LinearGradient } from "expo-linear-gradient";

const firstpage = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <LinearGradient
          colors={["#2193b0", "#6dd5ed"]}
          start={[0, 0]}
          end={[1, 1]}
          style={styles.gradient}
        >
          <QuizComponent />
        </LinearGradient>
      </View>
    </SafeAreaProvider>
  );
};

export default firstpage;
