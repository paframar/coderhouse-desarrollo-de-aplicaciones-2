import { useState } from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import { Button } from '@react-native-material/core'
import Card from '../components/Card';
import Input from '../components/Input'
import ConfirmedOutput from '../components/ConfirmedOutput';
import { COLORS } from '../utils/Colors.js'

const styles = StyleSheet.create({
    container: {
        width:'100%',
        backgroundColor: COLORS.GHOST_WHITE,
        height:'88%',
        alignItems:'center',
    },
    buttonContainer:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignContent:'center',
        padding:'5%',
        marginTop: '8%',
    },
    text:{
        fontSize:18,
        paddingTop:20,
        fontFamily:'open-sans',
    },
    screenTitle:{
        color: COLORS.GRAY_PALE,
        backgroundColor:COLORS.VIOLET_DARK,
        fontFamily:'open-sans-bold',
        textAlign:'center',
        fontWeight: '300',
        width: '100%',
        fontSize:18,
    },
});

const StartGameScreen = ({onGameStart}) => {

    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()


    const handleReset = () => {
        setEnteredValue('')
        setConfirmed(false)
    }

    const handleNumberInput = inputText => setEnteredValue(inputText.replace(/[^0-9]/g, ''))

    const handleConfirmInput = () => {
        const chosenNumber = parseInt(enteredValue)
        if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99){
            return
        } 
        setSelectedNumber(chosenNumber)
        setConfirmed(true)
        setEnteredValue('')
    }

    const confirmedOutput = confirmed 
        ? <ConfirmedOutput selectedNumber={selectedNumber} onGameStart={onGameStart} /> 
        : null

    return(
    <KeyboardAvoidingView>
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
            <View style={styles.container}>
                <Text style={styles.screenTitle}>StartGameScreen</Text>
                <Card>
                    <Text style={styles.text}>Elija un numero</Text>
                    <Input
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType={'number-pad'}
                        maxLength={2}
                        value={enteredValue}
                        onChangeText={handleNumberInput}
                        placeholder={''}
                        />
                    <View style={styles.buttonContainer}>
                        <Button 
                            style={styles.button} 
                            title={'Limpiar'} 
                            onPress={handleReset}
                        />
                        <Button 
                            style={styles.button} 
                            title={'Confirmar'} 
                            onPress={handleConfirmInput}
                            disabled={enteredValue.length === 0}
                         />
                    </View>
                </Card>      
                {confirmedOutput}
            </View>  
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    )
}

export default StartGameScreen