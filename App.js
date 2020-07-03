import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PhoneVerification from './beforeLogin/PhoneVerification';
import OTPV from './beforeLogin/otpverification';
import BeforeForm from './beforeLogin/beforeForm';
import alreadyacc from './beforeLogin/alreadyacc';
//admin
import adminHome from './admin/adminhome';
import adminDesk from './admin/adminDesk';
class App extends Component{
  render(){
    return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
});
const AppNavigator=createStackNavigator({
/*App:{
  screen:App,
    navigationOptions:{
    headerShown:false      
    }
  },*/
 PhoneVerification:{
   screen:PhoneVerification,
   navigationOptions:{
     headerShown:false
   }
 },OTPV:{
   screen:OTPV,
   navigationOptions:{
     headerShown:false
   }

 },
 BeforeForm:{
   screen:BeforeForm,
   navigationOptions:{
     headerShown:false
   }
 },
 alreadyacc:{
   screen:alreadyacc,
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
  adminDesk:{
    screen:adminDesk,
    navigationOptions:{
      headerShown:false
    }
  }
}
,{
  initialRouteName:'PhoneVerification'
})

export default createAppContainer(AppNavigator);