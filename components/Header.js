import {StyleSheet, View, Text } from 'react-native'
import { COLORS } from '../utils/Colors.js'

const styles = StyleSheet.create({
    container: {
      width:'100%',
      backgroundColor: COLORS.RED_DARK,
      justifyContent:'center',
      alignItems: 'center',
      height:'10%',
    },
    text:{
        fontFamily:'open-sans-bold',
        fontWeight: '300',
        fontSize: 24,
        color: COLORS.WHITE,
    },
});

const Header = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Adivina el número</Text>
        </View>
    )
}

export default Header