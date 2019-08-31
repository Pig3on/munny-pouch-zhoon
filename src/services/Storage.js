import {AsyncStorage} from 'react-native';

export const TODAY_TOTAL = "TODAY_TOTAL"
async function addTotal(value){
    try{

    
    const total = await AsyncStorage.getItem(TODAY_TOTAL);
    const totalFloat = parseFloat(total || '0');
    const valueFloat = parseFloat(value || '0');
    const newTotal = totalFloat + valueFloat;
    
    await AsyncStorage.setItem(TODAY_TOTAL,newTotal.toString());

    return true;

    }catch(e){
        return false;
    }
}

async function getTotal(){
    return await AsyncStorage.getItem(TODAY_TOTAL);
}

export {
    addTotal,
    getTotal,
}