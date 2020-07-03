import React,{Component} from 'react';
import {StyleSheet,ScrollView,View,KeyboardAvoidingView} from 'react-native';
import {Header,Input,Avatar,Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import IIcon from 'react-native-vector-icons/Entypo';
import { FAB } from 'react-native-paper';
import PasswordInputText from 'react-native-hide-show-password-input';

class beforeForm extends Component{
constructor(){
    super();
    this.state={
        userName:'',
        e_mail:'',
        password:'',
        confirm_password:''
    }
}
render(){
    return(
        <View>
<Header
backgroundColor="black"
leftComponent={{icon:'menu',color:'#fff'}}
centerComponent={{text:"Please Fill this form",style:{color:'#fff',fontSize:22}}}
rightComponent={<IIcon name="login" color="#fff" size={24} onPress={()=>this.props.navigation.navigate('alreadyacc')}/>}
/>
<ScrollView>
<KeyboardAvoidingView behavior="padding">
<Avatar
  size="large"
  rounded
  icon={{name: 'user', type: 'font-awesome'}}
  onPress={() => console.log("Works!")}
  containerStyle={{alignSelf:'center',marginVertical:15}}
  showEditButton
/>
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
<Input
 value={this.state.e_mail}
 onChangeText={(e_mail)=>this.setState({e_mail})}
 label="Email Address"
 keyboardType="email-address"
 placeholder="   Please Enter Your E-mail"
 leftIcon={
     <IIcon
       name='mail'
       size={24}
       color='black'
     />}
     />
 </View>   

 <View style={styles.input}>
                <PasswordInputText
                    label="Password"
                    placeholder="Password"
                    value={this.state.password}
                    onChangeText={ (password) => this.setState({ password }) }
                   
                    />
</View> 

                <View style={styles.input}>
                <PasswordInputText
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    value={this.state.confirm_password}
                    onChangeText={ (confirm_password) => this.setState({ confirm_password }) }
                   
                    />
                </View>

</KeyboardAvoidingView>
</ScrollView>
<FAB
    style={styles.fab}
    size="large"
    icon="check"
    onPress={()=>this.props.navigation.navigate('adminDesk',{
        userName:this.state.userName
    })}
  />
</View>
    );
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
        marginVertical:10,
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
export default beforeForm;