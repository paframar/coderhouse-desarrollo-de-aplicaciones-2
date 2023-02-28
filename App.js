import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@react-native-material/core'
import Header from './components/Header';
import Card from './components/Card';
import Input from './components/Input'

export default function App() {
  return (
  <>
      <Header />
      <View style={styles.container}>
        <Card>
            <Text style={styles.text}>Elija un numero</Text>
            <Input/>
            <View style={styles.buttonContainer}>
              <Button title={'Limpiar'} onPress={()=>{}}/>
              <Button title={'Confirmar'} onPress={()=>{}}/>
            </View>
        </Card>      
      </View>
  </>
  );
}




const styles = StyleSheet.create({
  container: {
    padding:20,
    borderWidth:1,
    width:'100%',
    backgroundColor: '#fff',
    justifyContent:'center',
    alignContent:'center',
  },
  buttonContainer:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignContent:'center',
  },
  text:{
    fontSize:18,
  }
  
});
