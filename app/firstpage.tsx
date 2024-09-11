import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import Index from "./index";
import { SafeAreaProvider } from "react-native-safe-area-context";
import styles from "@/constants/Styles";

const firstpage = () => {
  const question = "What does React Native use instead of css?";

  const correctAnswer = "Javascript";

  

  return (
    <SafeAreaProvider>
      <View style= {styles.container}>
        <Text>{question}</Text>
        <Link href={"/secondpage"} style={styles.button}>
          Alternative 1
        </Link>
      </View>
    </SafeAreaProvider>
  );
};

export default firstpage;
