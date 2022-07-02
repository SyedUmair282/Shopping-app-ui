import { View, Text,ScrollView,TouchableOpacity,StyleSheet,Image,ToastAndroid } from 'react-native'
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Productinfo = ({route,navigation}) => {
  const {product_info}=route.params;
  const tax_price=product_info.price/100 * 5;

  const addToCart=async(info)=>{
      try {
        let itemarray=await AsyncStorage.getItem('cartItems');
        itemarray=JSON.parse(itemarray);
        if(itemarray){
          let cartitem=itemarray;
          cartitem.push(info);
          await AsyncStorage.setItem('cartItems',JSON.stringify(cartitem));
          //console.log("run-1",itemarray);
        }
        else{
          let cartitem=[];
          cartitem.push(info);
          await AsyncStorage.setItem('cartItems',JSON.stringify(cartitem));
          //console.log("run-2",cartitem);
        }
        ToastAndroid.show('Item added successfully',ToastAndroid.SHORT);
        navigation.navigate('My cart')
      } catch (error) {
        alert('Something went wrong');
      }
      //console.log("data...>>",product_info);
  }
  return (
    <View style={Styles.main}>
      <ScrollView>
        <View style={Styles.main2}>
          <View style={Styles.main3}>
            <TouchableOpacity style={{width:50,alignItems:"center"}} onPress={()=> navigation.navigate('Home')}>
              <Entypo name='chevron-left' style={Styles.back}/>
            </TouchableOpacity>
          </View>
          <Image style={{width:150,height:200,alignSelf:"center"}} source={{uri:product_info.image}}/>
        </View>
        <View style={Styles.main4}>
          <Entypo name='shopping-cart' style={{fontSize:25,color:'black'}}/>
          <Text style={{fontSize:20,marginLeft:5}}>Shopping</Text>
        </View>
        <View style={Styles.main5}>
          <Text style={{fontSize:25,fontWeight:'bold',maxWidth:"80%",color:"black",letterSpacing:5}}>{product_info.desc}</Text>
          <Ionicons name='link-outline' style={{
            backgroundColor:"lightgray",
            fontSize:30,
            borderRadius:50,
            marginRight:10,
            padding:8,
            color:"blue"
          }}/>
        </View>
        <View style={Styles.main6}>
          <Text style={{letterSpacing:2,color:"gray",maxWidth:"95%",lineHeight:20,opacity:0.5}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Text>
        </View>
        <View style={Styles.main7}>
          <Text style={{fontSize:25,fontWeight:"bold",color:"black"}}>$ {product_info.price}.00</Text>
          <Text style={{marginVertical:3,letterSpacing:2,fontSize:17,opacity:0.5}}>Tax rate 5% ~ ${tax_price.toFixed(2)} (${tax_price+product_info.price})</Text>
        </View>
      </ScrollView>
      <View style={Styles.main8}>
          <TouchableOpacity onPress={()=>addToCart(product_info)} activeOpacity={0.6} style={{backgroundColor:"#559fd9",alignSelf:"center",width:"85%",height:50,alignItems:"center",justifyContent:"center",borderRadius:15}}>
            <Text style={{color:"white",fontSize:18}}>Add to cart</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
};

const Styles=StyleSheet.create({
  main:{
    width:'100%',
    height:'100%',
    position:'relative',
  },
  back:{
    fontSize:20,
    backgroundColor:"white",
    borderRadius:10,
    padding:12
  },
  main2:{
    width:'100%',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    backgroundColor:'#e6e6e6',
    position:'relative',
    
  },
  main3:{
   paddingLeft:10,
   paddingTop:10
  },
  main4:{
    flexDirection:"row",
    width:'100%',
    paddingLeft:10,
    paddingTop:10,
    alignItems:"center"
  },
  main5:{
    width:'100%',
    paddingLeft:13,
    paddingTop:5,
    marginVertical:20,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  main6:{
    width:"100%",
    paddingLeft:15
  },
  main7:{
    width:"100%",
    paddingLeft:15,
    marginTop:10,
    marginBottom:75
  },
  main8:{
    width:"100%",
    position:"absolute",
    bottom:12,
  }



})

export default Productinfo;