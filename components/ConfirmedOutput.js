

import {StyleSheet, View, Text } from 'react-native'
import Card from '../components/Card';
import { Button } from '@react-native-material/core'
import { COLORS } from '../utils/Colors.js'


const styles = StyleSheet.create({
    card:{
        padding:'5%',
        height:'25%',
    },
    text:{
        color: COLORS.VIOLET_DARK,
        backgroundColor:COLORS.GHOST_WHITE,
        borderColor:COLORS.VIOLET_DARK,
        padding:'2%',
        borderWidth: 2,
        borderRadius: 18,
        width: '80%',
        textAlign:'center',
        fontFamily:'open-sans-bold',
        fontSize: 18,
    },
    button:{
        width: '60%',
        height: '40%',
        justifyContent:'center',
        marginTop:'8%',
    }
});

const ConfirmedOutput = ({selectedNumber, onGameStart}) => {
    return(
        <Card cardStyle={styles.card}>
            <Text style={styles.text}>Numero elegido: {selectedNumber} </Text> 
            <Button 
                style={styles.button} 
                title={'Iniciar Juego'} 
                onPress={()=>{
                    onGameStart(selectedNumber)
                }}
            />
        </Card>
    )
}

export default ConfirmedOutput