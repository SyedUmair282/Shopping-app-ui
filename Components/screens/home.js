import React from 'react';
import { View, Text,StyleSheet,StatusBar,ScrollView,TouchableOpacity,Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Home = ({navigation}) => {
    const Products=[{
        id:1,
        image:"https://cdn.shopify.com/s/files/1/0506/6788/0604/products/SIGNATUREN-220_medium.png?v=1651923484",
        desc:"SIGNATURE N-220 PREMIUM NECKBAND",
        price:10
    },{
        id:2,
        image:"https://cdn.shopify.com/s/files/1/0506/6788/0604/products/SOLOX25_medium.png?v=1651923599",
        desc:"X-25 is the latest in Audionic's line of portable speakers",
        price:45,
    }];

    const Accessories=[{
        id:1,
        image:"https://cdn.shopify.com/s/files/1/0506/6788/0604/products/OPERA-05_medium.png?v=1651924766",
        desc:"OPERA 5 Audionic presents the all new earphone",
        price:30
    },{
        id:2,
        image:"https://cdn.shopify.com/s/files/1/0506/6788/0604/products/REEKO_medium.png?v=1651923291",
        desc:"With rhythmic lights and a balanced sound, the Reeko",
        price:26
    },{
        id:3,
        image:"https://cdn.shopify.com/s/files/1/0506/6788/0604/products/THUNDERT-50_medium.png?v=1651924970",
        desc:"Thunder Earphones T-50 are high functioning",
        price:15
    },{
        id:4,
        image:"https://cdn.shopify.com/s/files/1/0506/6788/0604/products/AIRBUDTWO_medium.png?v=1651923843",
        desc:"Presenting the all new Airbuds 2 with truly wireless technology.",
        price:33
    },{
        id:5,
        image:"https://cdn.shopify.com/s/files/1/0506/6788/0604/products/DAMACD-20_medium.png?v=1651923981",
        desc:"DAMAC D-20 (EARPHONE)",
        price:20
    },{
        id:6,
        image:"https://cdn.shopify.com/s/files/1/0506/6788/0604/products/DAMACD-50_medium.png?v=1651924001",
        desc:"DAMAC D-50 (EARPHONE)",
        price:25
    }]
  return (
    <View style={Styles.main}>
        <StatusBar backgroundColor={'gray'} barStyle="default"/>
        <ScrollView>
            <View style={Styles.header}>
                <TouchableOpacity>
                    <Entypo 
                    name='shopping-bag'
                    style={Styles.bag}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('My cart')}>
                    <MaterialCommunityIcons 
                    name='cart'
                    style={Styles.bag}
                    />
                </TouchableOpacity>
            </View>
            <View style={Styles.middle1}>
                <Text style={Styles.middle1_text1}>Hi-Fi Shop &amp; Services</Text>
                <Text style={Styles.middle1_text2}>Audio shop on karachi.{'\n'}This shop offers both products and services</Text>
            </View>
            <View style={Styles.middle2}>
                <View style={Styles.middle2_1}>
                    <Text style={Styles.middle2_1_text1}>Products</Text>
                    <Text style={Styles.middle2_1_text2}>41</Text>
                </View> 
                <Text style={Styles.middle2_text1}>See all</Text>
            </View>
            <View  style={Styles.middle3}>
                
                {Products.map((v,i)=>{
                     return <TouchableOpacity key={i} onPress={()=> navigation.navigate('Product info',{product_info:Products[i]})}>
                          <View style={Styles.middle3_1}>
                     <Image source={{uri:v.image}} style={{height:100,width:100}}/>
                     <View style={Styles.middle3_2}>
                         <Text style={{fontSize:10,color:"black",lineHeight:14,marginTop:5}}>{v.desc}</Text>
                         <Text style={{fontSize:14,opacity:0.4}}>$ {v.price}</Text>
                     </View>
                    </View>
                    </TouchableOpacity>
                })}
            </View>
            <View style={Styles.middle2}>
                <View style={Styles.middle2_1}>
                    <Text style={Styles.middle2_1_text1}>Accessories</Text>
                    <Text style={Styles.middle2_1_text2}>65</Text>
                </View> 
                <Text style={Styles.middle2_text1}>See all</Text>
            </View>
            <View style={Styles.middle3}>
                {Accessories.map((v,i)=>{
                     return <TouchableOpacity key={i} onPress={()=> navigation.navigate('Product info',{product_info:Accessories[i]})}>
                      <View style={Styles.middle3_1}>
                     <Image source={{uri:v.image}} style={{height:100,width:100}}/>
                     <View style={Styles.middle3_2}>
                         <Text style={{fontSize:10,color:"black",lineHeight:14,marginTop:5}}>{v.desc}</Text>
                         <Text style={{fontSize:14,opacity:0.4}}>$ {v.price}</Text>
                     </View>
                    </View>
                    </TouchableOpacity>
                })}
            </View>
            
        </ScrollView>
    </View>
  )
}
const Styles = StyleSheet.create({
    main: {
      width:"100%",
      height:"100%",
      backgroundColor:'white',
      
    },
    header:{
        width:"100%",
        flexDirection:"row",
        padding:10,
        justifyContent:'space-between'
    },
    bag:{
        fontSize:18,
        padding:12,
        borderRadius:10,
        color:"black",
        backgroundColor:"#dce3de",
        borderWidth:1,
        borderColor:"white"
    },
    middle1:{
        padding:16,
    },
    middle1_text1:{
        fontSize:26,
        color:"black",
        fontWeight:"600",
        letterSpacing:1
    },
    middle1_text2:{
        fontSize:12,
        fontWeight:"100",
        letterSpacing:1,
        lineHeight:20
    },
    middle2:{
        padding:16,
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'space-between'
    },
    middle2_1:{
        flexDirection:"row",
        alignItems:"center",
    },
    middle2_1_text1:{
        fontSize:18,
        fontWeight:'600',
        letterSpacing:1,
        color:"black"
    },
    middle2_1_text2:{
        fontSize:14,
        fontWeight:'200',
        color:"black",
        opacity:0.3,
        marginLeft:10,
    },
    middle2_text1:{
        color:'blue',
    },
    middle3:{
        padding:16,
        marginTop:-15,
        flexDirection:"row",
        justifyContent:"space-between",
        flexWrap:"wrap"
    },middle3_1:{
        borderWidth:1,
        width:150,
        backgroundColor:"#dce3de",
        flexDirection:"column",
        justifyContent:"center",
        borderRadius:15,
        borderColor:"white",
        alignItems:"center",
    },middle3_2:{
        width:150,
        backgroundColor:"white",
        flexDirection:"column",
        justifyContent:"center",
        borderRadius:10,
        alignItems:"center",
    },
});

export default Home;