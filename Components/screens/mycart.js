import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Mycart = ({navigation}) => {
  const [cartItem, setCartItem] = useState([]);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    check();
  }, []);
  
  const check = async () => {
    try {
      let datas = await AsyncStorage.getItem('cartItems');
      datas = JSON.parse(datas);
      if(datas){
        setCartItem(datas);
        let count=0;
        for (let i = 0; i < datas.length; i++) {
          count+=datas[i].price          
        }
        setCounter(count);
      }
      
    } catch (e) {
      console.log(e);
    }
  };
  //console.log("New Data===>",cartItem);
  const deleteItem=async(index)=>{
    var list =await AsyncStorage.getItem('cartItems') ? JSON.parse(await AsyncStorage.getItem('cartItems')) : [];
      list.splice(index,1);
      await AsyncStorage.setItem('cartItems', JSON.stringify(list));
      setCartItem(list)
      let count=0;
        for (let i = 0; i < list.length; i++) {
          count+=list[i].price          
        }
        setCounter(count);
  }


  const Proceed=()=>{
    if(cartItem.length>=1){
      Alert.alert(
        "Attention",
        "Your Order has been received",
        [
          { text: "OK", onPress: () => navigation.navigate('Home') }
        ])
    }
    else{
      Alert.alert(
        "Attention",
        "No order! Ok for shopping",
        [
          { text: "OK", onPress: () => navigation.navigate('Home') }
        ])
    }
    
  };

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
          <ScrollView showsVerticalScrollIndicator={false}>
          {cartItem.length>=1?cartItem.map((value, index) => {
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
                    activeOpacity={0.7} onPress={()=>deleteItem(index)}>
                    <MaterialCommunityIcons
                      name="delete-outline"
                      style={{color: 'black', fontSize: 20}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }):<Text>No items in cart</Text>}
          </ScrollView>
        </View>
        <View style={{padding:10}}>
          <Text style={{fontSize:20,fontWeight:"bold",color:"black"}}>Delivery location</Text>
          <View style={{flexDirection:"row",alignItems:"center",marginTop:5,backgroundColor:"lightgray",borderRadius:5}}>
          <Entypo name='location-pin' style={{color:"red",fontSize:15}}/>
          <Text style={{color:"black",fontSize:15}}> Karachi,PK</Text>
          </View>
        </View>
        <View style={{padding:10}}>
          <Text style={{fontSize:20,fontWeight:"bold",color:"black"}}>Payment method</Text>
          <View style={{flexDirection:"row",alignItems:"center",marginTop:5,backgroundColor:"lightgray",borderRadius:5}}>
          <MaterialCommunityIcons name='cash' style={{color:"green",fontSize:20,marginTop:2}}/>
          <Text style={{color:"black",fontSize:15}}> Cash on delivery</Text>
          </View>
        </View>
        <View style={{padding:10}}>
          <Text style={{fontSize:20,fontWeight:"bold",color:"black"}}>Total cost</Text>
          <View style={{justifyContent:"space-between",flexDirection:"row",marginTop:5,backgroundColor:"lightgray",borderRadius:5}}>
            <Text style={{color:"black"}}>Sub total</Text>
            <Text style={{color:"black"}}>${counter}</Text>
          </View>
        </View>
          <TouchableOpacity onPress={()=>Proceed()} activeOpacity={0.6} style={{backgroundColor:"#559fd9",alignSelf:"center",width:"85%",height:50,alignItems:"center",justifyContent:"center",borderRadius:15}}>
            <Text style={{color:"white",fontSize:18}}>Proceed to checkout</Text>
          </TouchableOpacity>
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
    height:280,
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
