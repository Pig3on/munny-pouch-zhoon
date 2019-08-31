import React, {Fragment,useState,useEffect} from 'react';
import {View,Text,ScrollView,RefreshControl} from 'react-native';
import styles from './HomeStyle';
import { withNavigation,NavigationEvents } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getTotal } from '../services/Storage';
const HomeContainer = ({navigation}) => {

  const [total,setTotal] = useState('0');
  const [refreshing,setRefreshing] = useState(false);

  const fetchTotal = () =>{
    
    getTotal().then((value)=>{
      if(value !== null){
        setTotal(value);
        
      }
  })
  }
  useEffect(() => {
    fetchTotal();
  });

    return (
        <ScrollView
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={()=>{fetchTotal()}} />}
          contentContainerStyle={styles.mainBox}>
           <NavigationEvents
            onDidFocus={()=>{fetchTotal()}}
          />
          <View style={styles.infoItem}>
            <Text style={styles.label}>
                Per Day:
            </Text>
            <Text style={styles.value}>
               59.8kn
            </Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>
                Per Month:
            </Text>
            <Text style={styles.value}>
               600.5kn
            </Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>
                Today:
            </Text>
            <Text style={styles.value}>
               {total.toString()} kn
            </Text>
          </View>
          <TouchableOpacity onPress={()=>{navigation.navigate('InputFunds')}} style={styles.infoItem}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
    );
  };


export default withNavigation(HomeContainer);