import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Header,Input,Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import PasswordInputText from 'react-native-hide-show-password-input';

import IIcon from 'react-native-vector-icons/Entypo';
import { ScrollView } from 'react-native-gesture-handler';

class alreadyacc extends Component{
constructor(){
    super();
    this.state={
        userName:'',
        password:''
    }
}
render(){
    return(
        <View>
        <Header
        backgroundColor="black"
        leftComponent={{icon:'menu',color:'#fff'}}
        centerComponent={{text:"Login",style:{color:'#fff',fontSize:22}}}
        />
        <ScrollView>
        <View style={styles.input}>
        <Input
        value={this.state.userName}
        onChangeText={(userName)=>this.setState({userName})}
        label="User name"
        keyboardType="email-address"
        placeholder="   Enter a User name"
        leftIcon={
        <Icon
       name='user'
       size={24}
       color='black'
        />}
        />
      </View>
                <View style={styles.input}>
                    <PasswordInputText
                    placeholder="   Password"
                    label="Password"
                    value={this.state.password}
                    onChangeText={ (password) => this.setState({ password }) }
                    
                    />
                </View>
                <Button
                icon={<IIcon
                name="login"
                color="#fff"
                size={20}
                />}
                title="  Login"
                buttonStyle={{backgroundColor:"black",marginHorizontal:130,marginTop:50}}
                onPress={()=>this.props.navigation.navigate('adminDesk',{
                    userName:this.state.userName
                })}/>
                </ScrollView>      
        </View>
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
        fontSize:22,
        
    },
    Button:{
        marginTop:20,
        backgroundColor:'black'
    },
    subtitle:{
        alignSelf:'center'
    },
    input:{
        marginVertical:20,
        marginHorizontal:15
    },
     fab: {
        position: 'absolute',
        margin: 16,
        right:0,
        bottom: -100,
        backgroundColor:'black'
      }
  });

export default alreadyacc;