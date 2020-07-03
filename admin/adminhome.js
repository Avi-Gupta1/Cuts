import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import {Header,Input,Button} from 'react-native-elements';
import {Title} from 'react-native-paper';
import IIcon from 'react-native-vector-icons/Foundation';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import coupon from './coupons';
import Booking from './books';
import buysubs from './buysubs';
import payment from './payment';
import details from './details';
class adminHome extends Component{
    constructor(){
        super();
       
    }

    render(){
        
    
        return(<View style={{marginTop:100}}>
            <Title style={{fontSize:32,alignSelf:'center',marginVertical:10}}>Looking Salons For ?</Title>
            <Image
            style={{width:220,height:200,alignSelf:'center',marginVertical:20}}
            source={{uri:"https://www.pointarenalighthouse.com/wp-content/uploads/2019/10/salon-icon.png"}}/>
            <View style={{flexDirection:'row',alignSelf:'center',marginTop:10}}>
            <Button
                icon={<IIcon
                name="torso"
                color="#fff"
                size={32}
                />}
                title="  Male"
                buttonStyle={{backgroundColor:"black",padding:10}}
                onPress={()=>this.props.navigation.navigate('coupon',{
                    gender:'male'
                })}
              />
                 <Button
                icon={<IIcon
                name="torso-female"
                color="#fff"
                size={32}
                />}
                title="  Female"
                buttonStyle={{backgroundColor:"black",padding:10,marginLeft:10}}
                onPress={()=>this.props.navigation.navigate('coupon',{
                    gender:'female'
                })}
                />
            </View>
        
        
            </View>)
    }


}

const couponNavigator=createStackNavigator({
    coupon:{
        screen:coupon,
        navigationOptions:{
            headerShown:false
        }
    },
    adminHome:{
        screen:adminHome,
        navigationOptions:{
            headerShown:false
        }
    },
    Book:{
        screen:Booking,
        navigationOptions:{
            headerShown:false
        }
    },
    buysubs:{
        screen:buysubs,
        navigationOptions:{
            headerShown:false
        }
    },
    payment:{
        screen:payment,
        navigationOptions:{
            headerShown:false
        }
    },
    details:{
        screen:details,
        navigationOptions:{
            headerShown:false
        }
    }
    

  },{
      initialRouteName:'adminHome'
  })
  
export default createAppContainer(couponNavigator);

