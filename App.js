import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import StudentScreen from './src/screens/StudentScreen';
import CharactersScreen from './src/screens/CharactersScreen';
import { colors } from './src/config/theme';
import useAppIntro from './src/hooks/useAppIntro';
import AppIntro from './src/components/AppIntro';
const Stack = createNativeStackNavigator();
export default function App() {
  const ready = useAppIntro();
  if (!ready) return <SafeAreaProvider><StatusBar barStyle="dark-content" backgroundColor={colors.background} /><AppIntro /></SafeAreaProvider>;
  return <SafeAreaProvider><StatusBar barStyle="dark-content" backgroundColor={colors.background} />
    <NavigationContainer theme={{ ...DefaultTheme, colors: { ...DefaultTheme.colors, background: colors.background, card: colors.background, text: colors.text, primary: colors.purple, border: colors.border } }}>
      <Stack.Navigator initialRouteName="Student" screenOptions={{ headerTintColor: colors.text, headerShadowVisible: false, contentStyle: { backgroundColor: colors.background } }}>
        <Stack.Screen name="Student" component={StudentScreen} options={{ title: 'Perfil del estudiante' }} />
        <Stack.Screen name="Characters" component={CharactersScreen} options={{ title: 'Rick and Morty' }} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>;
}
