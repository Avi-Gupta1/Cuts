import React,{Component} from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import {Card,Title,Paragraph,FAB} from 'react-native-paper';
import {Header,Button} from 'react-native-elements';
import IIcon from 'react-native-vector-icons/Entypo';

class Booking extends Component{

render(){
    this.state={
        title:JSON.stringify(this.props.navigation.getParam('title')).substring(1,JSON.stringify(this.props.navigation.getParam('title')).length-1),
        paragraph:JSON.stringify(this.props.navigation.getParam('paragraph')).substring(1,JSON.stringify(this.props.navigation.getParam('paragraph')).length-1),
        offer:JSON.stringify(this.props.navigation.getParam('paragraph2')).substring(1,JSON.stringify(this.props.navigation.getParam('paragraph2')).length-1),
        source:JSON.stringify(this.props.navigation.getParam('source')).substring(1,JSON.stringify(this.props.navigation.getParam('source')).length-1),
        paragraph3:JSON.stringify(this.props.navigation.getParam('paragraph3')).substring(1,JSON.stringify(this.props.navigation.getParam('paragraph3')).length-1),

    }
    return(<View>
              <Header
backgroundColor="black"
leftComponent={<IIcon name="scissors" color="#fff" size={30} onPress={()=>this.props.navigation.navigate('adminHome')}/>}
centerComponent={{text:"Your Coupon",style:{color:"#fff",fontSize:25}}}
/>
    <Card style={styles.shadow} 
            >
            <Card.Content>
    <Title>{this.state.title}          {this.state.paragraph3}</Title>
        <Paragraph>{this.state.paragraph}</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri:`${this.state.source}`}}/>
            <Title>{this.state.offer}</Title>
            </Card>   
         <FAB
    style={styles.fab}
    label="Apply Coupon"
    size="large"
    icon="check"
    onPress={()=>this.props.navigation.navigate('details',{
        title:this.state.title,
        offer:this.state.offer,
    })}
   
  />
    </View>)
}

}

const styles = StyleSheet.create({
    shadow:{
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 12,
        borderRadius: 10,
        marginVertical:8,
        marginHorizontal:5,
        marginBottom:15,

    },
    fab: {
        position: 'absolute',
        margin: 16,
        right:0,
        bottom: -190,
        backgroundColor:'black'
      }

  });

export default Booking;