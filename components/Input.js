import {StyleSheet, View, Text, TextInput } from 'react-native'
import { COLORS } from '../utils/Colors.js'

const styles = StyleSheet.create({
    container: {
      width:'80%',
      justifyContent:'center',
      alignItems: 'center',
    },
    textInput:{
        fontFamily:'open-sans-bold',
        fontSize:24,
        width:'40%',
        color:COLORS.RED_DARK,
        borderColor:COLORS.VIOLET_DARK,
        borderBottomWidth: 4,
        textAlign:'center',
        marginTop:'5%',
        paddingVertical: '2%',
    },
});

const Input = ({maxLength, value, inputStyle, onChangeText, onSubmitEditing, placeholder}) => {
    return(
        <View style={styles.container}>
            <TextInput 
                style={styles.textInput} 
                editable={true}
                placeholder={placeholder}
                onChangeText={onChangeText}
                onSubmitEditing={onSubmitEditing}
                maxLength={maxLength}
                value={value}
            />
        </View>
    )
}

export default Input