import React,{Component} from 'react';
import {View,StyleSheet} from 'react-native';
import {Card,Title,Paragraph} from 'react-native-paper';


class Cardlayout extends Component{




    render(){
        return(
            <Card style={styles.shadow} onPress={()=>this.props.navigation.navigate('Book',{
                title:this.props.title,
                paragraph:this.props.paragraph,
                paragraph2:this.props.paragraph2,
                source:this.props.source,
                paragraph3:this.props.paragraph3
            })}>
            <Card.Content>
        <Title>{this.props.title}          {this.props.paragraph3}</Title>
        <Paragraph>{this.props.paragraph}</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri:`${this.props.source}`}}/>
            <Title>{this.props.paragraph2}</Title>
            </Card>

        )
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

    }

  });


export default Cardlayout;