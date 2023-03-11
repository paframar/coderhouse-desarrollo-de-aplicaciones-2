import {StyleSheet, View, Text } from 'react-native'
import { COLORS } from '../utils/Colors.js'

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        backgroundColor: COLORS.WHITE,
        shadowColor: COLORS.JET_BLACK,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 3.84,
        alignItems:'center',
        width:'90%',
        marginTop:'5%',
    },
});

const Card = ({children, cardStyle}) => {
    return(
        <View style={[styles.card, cardStyle]}>
            {children}
        </View>
    )
}

export default Card