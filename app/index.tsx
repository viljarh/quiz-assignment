import { Text, View, StyleSheet, Dimensions } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function Index() {
  const styles = StyleSheet.create({
    fullScreen: {
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
    },
  });


  const viewStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <SafeAreaProvider>
      <View style={viewStyles.container}>
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </View>
    </SafeAreaProvider>
  );
}
