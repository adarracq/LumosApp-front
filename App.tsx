import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useState } from 'react';
import IntroScreen from './src/SCREENS/IntroScreen/IntroScreen';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNav from './src/NAVIGATION/BottomTabNav';
import { DailiesContext } from './src/CONTEXTS/DailiesContext';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLogin, setIsLogin] = useState(true);

  const [fontsLoaded, fontError] = useFonts({
    poppins: require('./src/ASSETS/fonts/poppins/Poppins-Regular.ttf'),
    'poppins-bold': require('./src/ASSETS/fonts/poppins/Poppins-Bold.ttf'),
    'poppins-light': require('./src/ASSETS/fonts/poppins/Poppins-Light.ttf'),
    'poppins-medium': require('./src/ASSETS/fonts/poppins/Poppins-Medium.ttf'),
    'poppins-semibold': require('./src/ASSETS/fonts/poppins/Poppins-SemiBold.ttf'),
    'poppins-italic': require('./src/ASSETS/fonts/poppins/Poppins-Italic.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      console.log('Hiding splash screen...');
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    console.log('Loading fonts...');
    return null;
  }

  return (
    <NavigationContainer>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <StatusBar style="auto" />
        {
          isLogin ? (
            <BottomTabNav />
          ) : (
            <IntroScreen />
          )

        }
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
