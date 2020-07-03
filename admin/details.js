import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import {Header,Button} from 'react-native-elements';
import {Title,Subheading} from 'react-native-paper';
import IIcon from 'react-native-vector-icons/Entypo';


class details extends Component{



    render(){
        this.state={
            title:JSON.stringify(this.props.navigation.getParam('title')).substring(1,JSON.stringify(this.props.navigation.getParam('title')).length-1),
            offer:JSON.stringify(this.props.navigation.getParam('offer')).substring(1,JSON.stringify(this.props.navigation.getParam('offer')).length-1),

        }
        return(
            <View>
            <Header
            backgroundColor="black"
            leftComponent={<IIcon name="scissors" color="#fff" size={30} onPress={()=>this.props.navigation.navigate('adminHome')}/>}
            centerComponent={{text:"Your Coupon",style:{color:"#fff",fontSize:25}}}
            />
            
            <Title style={{alignSelf:'center'}}>Your Coupon for {this.state.title} </Title>
            
            <Image
            style={{width:220,height:200,alignSelf:'center',marginVertical:20}}
            source={{uri:"https://www.pointarenalighthouse.com/wp-content/uploads/2019/10/salon-icon.png"}}/>
          
        <Title style={{alignSelf:'center'}}>{this.state.offer}</Title>
        <Title style={{alignSelf:'center'}}>is in process</Title>
        <Subheading style={{alignSelf:'center',textAlign:'center'}}>An SMS will be sent to your Registered mobile number about your coupons details</Subheading> 



            <Button
            title="Search more coupons"
            buttonStyle={{backgroundColor:'#000',marginTop:20}}
            icon={<IIcon
                name="scissors"
                color="#fff"
                size={32}
            />}
            onPress={()=>this.props.navigation.navigate('adminHome',{
                coupon:"Applied"
            })}
            />   
            </View>




           
        )



    }
}

export default details;