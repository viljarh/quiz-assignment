import { Text, View, StyleSheet, Dimensions } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeWindStyleSheet } from "nativewind";
import { LinearGradient } from "expo-linear-gradient";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function Index() {
  
  const styles = StyleSheet.create({
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
    }
  })

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
      <LinearGradient
          colors={["#2193b0", "#6dd5ed",]}
          start={[0, 0]}
          end={[1, 1]}
          style={styles.gradient}
        >
        <Text style={styles.textStyles}>Edit app/index.tsx to edit this screen.</Text>
        </LinearGradient>
      </View>
    </SafeAreaProvider>
  );
}
