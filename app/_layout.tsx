import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="questions/index" options={{ headerShown: false }} />
      <Stack.Screen name="result/index" options={{ headerShown: false }} />
    </Stack>
  );
}
