
import { useState, useCallback } from 'react'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, View, SafeAreaView } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const [userNumber, setUserNumber] = useState()

  const handleGameStart = selectedNumber => {
    setUserNumber(selectedNumber)
  }


  const styles = StyleSheet.create({
    container:{
      height:'100%'
    },
  })

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
        <Header/>
        {
          !userNumber
          ? <StartGameScreen onGameStart={handleGameStart}/>
          : <GameScreen />
        }
    </SafeAreaView>
  );
}
