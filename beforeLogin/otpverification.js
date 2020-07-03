import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,ScrollView,KeyboardAvoidingView,ImageBackground} from 'react-native';
import { Title,Subheading } from 'react-native-paper';
import { Input,Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
class otpV extends Component{
    render(){
        {this.state={
            phone_number:JSON.stringify(this.props.navigation.getParam('Phone_Number')).substring(1, JSON.stringify(this.props.navigation.getParam('Phone_Number')).length - 1)
        }}
        return(
            <ImageBackground
            style={{width:'100%',height:'100%',size:10}}
            source={{uri:"https://www.barberdepots.com/wp-content/uploads/2014/03/shutterstock_81757537.jpg"}}>
            <ScrollView>
                <KeyboardAvoidingView behavior="padding">
             <View style={{marginTop:30}}>
               <Title style={styles.title}>We have sent you the OTP : </Title>
            <Subheading style={styles.subtitle}> We have sent you the Otp on Number :</Subheading>
            <Subheading style={styles.subtitle}>{this.state.phone_number}</Subheading>
            </View>
            <View style={{marginVertical:120}}>
            <Input
            
            
            label="Enter One Time Password"
            keyboardType="number-pad"
            placeholder="   Please Enter OTP"
            placeholderTextColor="#000"
            leftIcon={
                <Icon
                  name='lock'
                  size={24}
                  color='black'
                />}
                />
             </View>   
             <View style={{marginTop:170}}>
                <Button
                onPress={()=>this.props.navigation.navigate('BeforeForm')}
                buttonStyle={styles.Button}
                title="Submit"
                />
            </View>
                </KeyboardAvoidingView>
            </ScrollView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image:{width:100,height:100,marginTop:100,marginBottom:10,alignSelf:'center'},
    title:{
        marginBottom:10,
        alignSelf:'center',
        fontSize:28,
        
    },
    Button:{
        marginTop:20,
        backgroundColor:'black'
    },
    subtitle:{
        alignSelf:'center'
    }
  });
export default otpV;