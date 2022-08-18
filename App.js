import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts,PressStart2P_400Regular } from '@expo-google-fonts/press-start-2p';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';
import Theme from './src/theme';
import Home from './src/Screens/Home';
import Game from './src/Screens/Game';

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    "regular" : PressStart2P_400Regular,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
      return (
        <NavigationContainer theme={Theme()}>
          <ThemeProvider theme={Theme()}>
            <Stack.Navigator initialRouteName='Home'>
              <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
              <Stack.Screen name="Game" component={Game} options={{headerShown: false}} />
            </Stack.Navigator>
          </ThemeProvider>
        </NavigationContainer>
      );
    }
}