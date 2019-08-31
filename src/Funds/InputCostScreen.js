import React, { useState, useEffect } from 'react';
import { TextInput,View,TouchableOpacity,Text } from 'react-native';
import styles from './InputCostStyles';
import { withNavigation } from 'react-navigation';
import { addTotal } from '../services/Storage';


const InputCostScreen = ({navigation}) =>{
    const [value,setValue] = useState('');

    return(
        <View style={styles.mainBox}>
            <View style={{flexDirection:'row'}}>
            <TextInput style={styles.fundsInput}
                        keyboardType={'decimal-pad'}
                        placeholder={'insert cost'}
                        placeholderTextColor="white"
                       value={value} 
                       onChangeText={(text)=>{setValue(text)}} />
            </View>
            <TouchableOpacity onPress={()=>{ 
                addTotal(value);
                navigation.goBack()
                }}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Add Cost</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default withNavigation(InputCostScreen);