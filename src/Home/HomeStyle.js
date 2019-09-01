import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    mainBox:{
        flex:1,
        marginLeft:20,
        marginRight:20,
        alignItems:'center',
        justifyContent:'center'
    },
    infoItem:{
        marginBottom:30,
        flexDirection:'row'
    },
    label:{
        textAlign:'center',
        fontSize:15,
        flex:0.4,
        textAlignVertical :'center'
    },
    value:{
        textAlign:'center',
        fontSize:25,
        flex:0.6,
        textAlignVertical :'center'
    },
    button:{
        borderWidth:1,
        width:300,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        borderColor:'black'
    },
    buttonText:{
        fontSize:50,
    }
});

export default styles;