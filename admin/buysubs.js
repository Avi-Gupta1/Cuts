import React,{Component} from 'react';
import {View,Text,ScrollView,Image,StyleSheet} from 'react-native';
import {Header,CheckBox} from 'react-native-elements';
import {Title,Paragraph, Dialog, Portal} from 'react-native-paper';
import IIcon from 'react-native-vector-icons/Entypo';

class buysubs extends Component{
  state = {
    visible: false,
  };


  _showDialog = () => this.setState({ visible: true });

  _hideDialog = () => this.setState({ visible: false });

    render(){
        return(
            <View>
            <Header
backgroundColor="black"
leftComponent={<IIcon name="scissors" color="#fff" size={30} onPress={()=>this.props.navigation.navigate('adminHome')}/>}
centerComponent={{text:"Subscribe",style:{color:"#fff",fontSize:25}}}
/>
<ScrollView>
  
<Image
                style={styles.image}
                source={{uri:'https://cdn.clipart.email/e914e4332603ed5c8c9801037afa495b_indian-rupee-sign-currency-symbol-india-png-download-16001600-_1600-1600.png'}}/>
           

<Title style={{alignSelf:'center'}}>Subscription plans :</Title>
<CheckBox
  center
  title='Gold subscription Rs.600 for Year'
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  checked={false}
  size={30}
  onPress={()=>this.props.navigation.navigate('payment',{
    pay:"Rs.600"
  })}
/>

<CheckBox
  center
  title='Rs.100 for Year       '
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  checked={false}
  size={30}
  onPress={()=>this.props.navigation.navigate('payment',{
    pay:"Rs.100"
  })}
/>
<CheckBox
  center
  title='Rs.60 for 6 months'
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  checked={false}
  size={30}
  onPress={()=>this.props.navigation.navigate('payment',{
    pay:"Rs.60"
  })}

/>
<CheckBox
  center
  title='Rs.30 for 1 month '
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  checked={false}
  size={30}
  onPress={()=>this.props.navigation.navigate('payment',{
    pay:"Rs.30"
  })}

/>
</ScrollView>

</View>

        )
    }
}

const styles=StyleSheet.create({
    image:{width:120,height:180,marginTop:50,marginBottom:10,alignSelf:'center'},


})


export default buysubs;