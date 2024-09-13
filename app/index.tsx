import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeWindStyleSheet } from "nativewind";
import { LinearGradient } from "expo-linear-gradient";
import { Link, Href } from "expo-router";
import styles from "@/constants/Styles";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function Index() {
  
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <LinearGradient
          colors={["#2193b0", "#6dd5ed"]}
          start={[0, 0]}
          end={[1, 1]}
          style={styles.gradient}
        >
          <Text style={styles.textStyles}>This is the quiz app.</Text>
          <Link href={"/quizpage" as Href<string | object>} style={styles.button}>Start Quiz</Link>
        </LinearGradient>
      </View>
    </SafeAreaProvider>
  );
}
