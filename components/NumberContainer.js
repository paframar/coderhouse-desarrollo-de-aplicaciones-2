

import {StyleSheet, View, Text } from 'react-native'
import Card from '../components/Card';
import { Button } from '@react-native-material/core'
import { COLORS } from '../utils/Colors.js'



const styles = StyleSheet.create({
    container: {
      width:'80%',
      justifyContent:'center',
      alignItems: 'center',
      height:'30%',
      margin: '10%',
      borderRadius:'20%',
    },
    card:{
        padding:10,
        borderColor: COLORS.RED_LIGHT,
        borderWidth:3,
        width:'30%'
    },
    text:{
        color: 'crimson',
        fontSize:48,
    },
    button:{
        margin:20,
        top:10,
    }
});

const NumberContainer = ({number}) => {
    return(
        <View style={styles.container}>
            <Card cardStyle={styles.card}>
                <Text style={styles.text}>{number}</Text>
            </Card>
        </View>
    )
}

export default NumberContainer