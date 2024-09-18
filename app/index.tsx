import { router, Href } from "expo-router";
import { Image, SafeAreaView, Text, TouchableOpacity } from "react-native";

const App = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center ">
      <Image source={require("@/assets/images/quiz-image.png")} />
      <Text className="text-3xl font-bold p-5 ">Welcome to the Quiz App</Text>
      <TouchableOpacity
        onPress={() => router.push("/questions" as Href<string | object>)}
        className="border border-black rounded-lg p-3"
      >
        <Text className="font-semibold text-lg">Start Quiz</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;
