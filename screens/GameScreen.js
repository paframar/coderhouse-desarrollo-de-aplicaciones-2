import { useState } from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, Dimensions, PixelRatio } from 'react-native';
import { Button } from '@react-native-material/core'
import Card from '../components/Card';
import Input from '../components/Input'
import ConfirmedOutput from '../components/ConfirmedOutput';
import NumberContainer from '../components/NumberContainer';
import { COLORS } from '../utils/Colors.js'

const styles = StyleSheet.create({
    container: {
        width:'100%',
        backgroundColor: COLORS.GHOST_WHITE,
        height:'88%',
    },
    buttonContainer:{
        width:'80%',
        marginHorizontal:'10%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
        padding:'10%',
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

const GameScreen = ({userOption}) => {

    const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window')
    console.log('width ', SCREEN_WIDTH)
    console.log('height ', SCREEN_HEIGHT)

    const generateRandomBetween = (min, max, exclude) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        const rndNumber = Math.floor(Math.random() * (max-min)) + min;
        if(rndNumber === exclude){
            return generateRandomBetween(min, max, exclude);
        }else{
            return rndNumber;
        }
    };
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userOption))

    return(
        <View style={styles.container}>
            <Text style={styles.screenTitle}>GameScreen</Text>
            <NumberContainer number={currentGuess} />
            <Card cardStyle={styles.buttonContainer}>
                <Button title={'Mayor'} onPress={()=>{}} />
                <Button title={'Menor'} onPress={()=>{}} />
            </Card>
        </View> 
    )

}

export default GameScreen