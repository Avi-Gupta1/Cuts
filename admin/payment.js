import React,{Component} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import {Header,Button} from 'react-native-elements';
import {Title,Subheading} from 'react-native-paper';
import IIcon from 'react-native-vector-icons/Entypo';
class payment extends Component{

render(){
    this.state={
        pay:JSON.stringify(this.props.navigation.getParam('pay')).substring(1,JSON.stringify(this.props.navigation.getParam('pay')).length-1)
    }
return(
    <View>
        <Header
backgroundColor="black"
leftComponent={<IIcon name="scissors" color="#fff" size={30} onPress={()=>this.props.navigation.navigate('adminHome')}/>}
centerComponent={{text:"Payment",style:{color:"#fff",fontSize:25}}}
/>

<Image
                style={styles.image}
                source={{uri:'https://cdn.clipart.email/e914e4332603ed5c8c9801037afa495b_indian-rupee-sign-currency-symbol-india-png-download-16001600-_1600-1600.png'}}/>
           
    <Title style={{alignSelf:'center'}}>Pay for your subscription</Title>
    <Subheading style={{alignSelf:'center'}}>Enjoy all coupons and services of app</Subheading>
    <Button title={`Pay Securely ${this.state.pay}`}  buttonStyle={{backgroundColor:'#000',marginTop:80,padding:10}}/>
    </View>
)

}




}
const styles=StyleSheet.create({
    image:{width:120,height:180,marginTop:50,marginBottom:10,alignSelf:'center'},


})

export default payment;