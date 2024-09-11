import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import Index from "./index";
import { SafeAreaProvider } from "react-native-safe-area-context";

const firstpage = () => {
  const question = "What does React Native use instead of css?";

  const correctAnswer = "Javascript";

  const styles = StyleSheet.create({
    button: {
      color: "white",
      backgroundColor: "black",
      padding: 10,
      borderRadius: 5,
      marginTop: 10,
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    textStyles: {
      fontSize: 14,
      color: "white",
    },
    gradient: {
      flex: 1,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
  });

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
