import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,ScrollView,KeyboardAvoidingView,ImageBackground} from 'react-native';
import { Title } from 'react-native-paper';
import { Input,Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
class PhoneVerification extends Component{
    constructor(){
        super();
        this.state={
            Phone_Number:''
        }
    }
    render(){
        return(
            <ImageBackground
            style={{width:'100%',height:'100%'}}
            source={{uri:"https://media.istockphoto.com/photos/smiling-barber-using-phone-in-shop-picture-id543973350"}}>

<View style={styles.container}>
            <ScrollView>
                <KeyboardAvoidingView behavior="padding">
                <Title style={styles.title} color="white">Verify Your Phone Number : </Title>

                    <View style={styles.views}>
            <Input
            value={this.state.Phone_Number}
            onChangeText={(Phone_Number)=>this.setState({Phone_Number})}
            keyboardType="number-pad"
            style={styles.input}
            placeholderTextColor="#000"
            placeholder="   Phone Number"
            leftIcon={
                <Icon
                  name='mobile'
                  size={24}
                  color='black'
                />}
                />
                </View>

                <View style={styles.bottom}>
                <Button
                onPress={()=>this.props.navigation.navigate('OTPV',{
                   Phone_Number:this.state.Phone_Number 
                })}
                buttonStyle={styles.Button}
                title="Submit"
                
                />
                </View>
                </KeyboardAvoidingView>
            </ScrollView>
            </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
        marginTop:50,
        marginBottom:30,
        alignSelf:'center',
        fontSize:28
        },
    Button:{
        marginTop:20,
        backgroundColor:'black'
    },
    bottom:{
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 20,
        marginTop:120
    },
    views:{
        marginVertical:150
    }
  });
export default PhoneVerification;