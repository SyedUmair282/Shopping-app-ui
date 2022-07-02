import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  ToastAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Mycart = ({navigation}) => {
  const [cartItem, setCartItem] = useState([]);
  //const [counter, setCounter] = useState(0);
  useEffect(() => {
    check();
  }, []);
  
  const check = async () => {
    try {
      let datas = await AsyncStorage.getItem('cartItems');
      datas = JSON.parse(datas);
      setCartItem(datas);
      //console.log("Data is===>",datas);
      let arr = [];
    
       let count=0;
    
      
      for (let i = 0; i < datas.length; i++) {
        if (datas[0].id === datas[i].i) {
          count+=1
        }
      }
      console.log("phela item no: ",count);
    } catch (e) {
      console.log(e);
    }
  };
  //console.log("New Data===>",cartItem);

  return (
    <View style={Styles.main}>
      <ScrollView>
        <View style={Styles.main2}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={Styles.btnBack}
            onPress={() => navigation.goBack()}>
            <Entypo name="chevron-left" style={Styles.btnBack_en} />
          </TouchableOpacity>
          <View style={Styles.main2_1}>
            <Text style={Styles.main2_1_text}>Order Details</Text>
          </View>
        </View>
        <View style={Styles.main3}>
          <Text style={Styles.main3_text}>My Cart</Text>
          {cartItem.map((value, index) => {
            return (
              <View style={Styles.main3_1} key={index}>
                <View style={Styles.main3_1_1}>
                  <Image
                    style={Styles.main3_1_1_img}
                    source={{uri: value.image}}
                  />
                </View>
                <View style={Styles.main3_1_2}>
                  <Text style={Styles.main3_1_2_text1}>{value.desc}</Text>
                  <Text style={{lineHeight: 25}}>${value.price}</Text>
                  <TouchableOpacity
                    style={Styles.main3_1_2_btn}
                    activeOpacity={0.7}>
                    <MaterialCommunityIcons
                      name="delete-outline"
                      style={{color: 'black', fontSize: 20}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};
const Styles = StyleSheet.create({
  main: {
    width: '100%',
  },
  main2: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnBack: {
    backgroundColor: '#bfbfbf',
    width: 50,
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    height: 45,
    justifyContent: 'center',
  },
  btnBack_en: {
    fontSize: 20,
    color: 'black',
  },
  main2_1: {
    width: '80%',
    marginLeft: 10,
    alignItems: 'center',
  },
  main2_1_text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  main3: {
    width: '100%',
    padding: 10,
  },
  main3_text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    letterSpacing: 1,
  },
  main3_1: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
  },
  main3_1_1: {
    width: '30%',
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: 'lightgray',
  },
  main3_1_1_img: {
    width: 60,
    height: 80,
  },
  main3_1_2: {
    width: '70%',
    paddingLeft: 5,
    justifyContent: 'center',
  },
  main3_1_2_text1: {
    fontWeight: 'bold',
    color: 'black',
  },
  main3_1_2_btn: {
    backgroundColor: 'lightgray',
    width: '18%',
    alignItems: 'center',
    padding: 5,
    borderRadius: 20,
    alignSelf: 'center',
  },
});

export default Mycart;
