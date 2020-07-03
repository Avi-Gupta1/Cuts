import React,{Component} from 'react';
import {View,Text,ImageBackground} from 'react-native';
import {Header,SearchBar} from 'react-native-elements';
import IIcon from 'react-native-vector-icons/Entypo';
import CardLayouts from './cardLayout';
import { ScrollView } from 'react-native-gesture-handler';

import book from './books';
import details from './details';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
class salonsnear extends Component{
    state = {
        search: '',
      };
    
      updateSearch = search => {
        this.setState({ search });
      };
render(){
    const { search } = this.state;

    const pre=[
      {title:"Looks Salon",paragraph:"Connaught Place,New Delhi, Delhi 110001",source:"https://img4.nbstatic.in/tr:w-500/5c6e7094e21b84000dcc1aa3.jpg",paragraph2:'Cutting+Shampo at Rs.400',key:2,paragraph3:'20% off'},
      {title:"Jawed Habib",paragraph:"Near to Roopak Store,New Delhi, Delhi 110005",source:"https://image.slidesharecdn.com/jhhairbeautypresentationalpha2-120911110040-phpapp02/95/jawed-habib-hair-beauty-salon-presentation-5-728.jpg?cb=1349509674",paragraph2:'Cutting+Shampo at Rs.400',key:3,paragraph3:'20% off'},
      {title:"Lakme salon",paragraph:"M- 4, 2nd floor,South Extension – II,New Delhi – 110049.",source:"https://www.franchisemart.in/franchise/wp-content/uploads/2019/07/lakme-salon-300x223.jpg",paragraph2:'Cutting+Shampo at Rs.400',key:4,paragraph3:'20% off'},
       {title:"Khoobsurat Hair Salon",paragraph:"Paschim Vihar,New Delhi, Delhi 110063",source:"https://img4.nbstatic.in/tr:w-500/5af2e20bcff47e000ce0023b.jpg",paragraph2:'Cutting+Shampo at Rs.400',key:5,paragraph3:'20% off'},
      {title:"Hair Craft Salon",paragraph:"Defence Colony,New Delhi, Delhi 110024",source:"https://content3.jdmagicbox.com/comp/dehradun/w6/9999px135.x135.171118140038.d3w6/catalogue/haircraft-unisex-salon-dehradun-53vjv.jpg",paragraph2:'Cutting+Shampo at Rs.400',key:6,paragraph3:'20% off'},
      {title:"Kapil’s Salon",paragraph:"Sector 10, Rohini,New Delhi, Delhi 110085",source:"https://imgmedia.lbb.in/media/2019/09/5d6e05801f21271baa9c16da_1567491456403.jpg",paragraph2:'Cutting+Shampo at Rs.400',key:7,paragraph3:'20% off'},
      {title:"Sanrix Hair Salon",paragraph:"Sri Aurobindo Marg, Ansari Nagar, Ansari Nagar East, New Delhi, Delhi 110029",source:"https://images.jdmagicbox.com/comp/delhi/l9/011pxx11.xx11.170328110843.g8l9/catalogue/sanrix-unisex-salon-paschim-vihar-delhi-salons-47jebyu.jpg",paragraph2:'Cutting+Shampo at Rs.400',key:8,paragraph3:'20% off'},
      {title:"Jawed Habib",paragraph:"Near to Roopak Store,New Delhi, Delhi 110005",source:"https://www.whatsuplife.in/pune/awn-admin/uploaded_file/0_1538158101-14.jpg",paragraph2:'Cutting+Shampo at Rs.400',key:1,paragraph3:'20% off'},
      {title:"Looks Salon",paragraph:"Connaught Place,New Delhi, Delhi 110001",source:"https://img4.nbstatic.in/tr:w-500/5c6e7094e21b84000dcc1aa3.jpg",paragraph2:'Cutting+Shampo at Rs.400',key:2,paragraph3:'20% off'},
      {title:"Jawed Habib",paragraph:"Near to Roopak Store,New Delhi, Delhi 110005",source:"https://image.slidesharecdn.com/jhhairbeautypresentationalpha2-120911110040-phpapp02/95/jawed-habib-hair-beauty-salon-presentation-5-728.jpg?cb=1349509674",paragraph2:'Cutting+Shampo at Rs.400',key:3,paragraph3:'20% off'},
      {title:"Lakme salon",paragraph:"M- 4, 2nd floor,South Extension – II,New Delhi – 110049.",source:"https://www.franchisemart.in/franchise/wp-content/uploads/2019/07/lakme-salon-300x223.jpg",paragraph2:'Cutting+Shampo at Rs.400',key:4,paragraph3:'20% off'},
       {title:"Khoobsurat Hair Salon",paragraph:"Paschim Vihar,New Delhi, Delhi 110063",source:"https://img4.nbstatic.in/tr:w-500/5af2e20bcff47e000ce0023b.jpg",paragraph2:'Cutting+Shampo at Rs.400',key:5,paragraph3:'20% off'},
      {title:"Hair Craft Salon",paragraph:"Defence Colony,New Delhi, Delhi 110024",source:"https://content3.jdmagicbox.com/comp/dehradun/w6/9999px135.x135.171118140038.d3w6/catalogue/haircraft-unisex-salon-dehradun-53vjv.jpg",paragraph2:'Cutting+Shampo at Rs.400',key:6,paragraph3:'20% off'},
      {title:"Kapil’s Salon",paragraph:"Sector 10, Rohini,New Delhi, Delhi 110085",source:"https://imgmedia.lbb.in/media/2019/09/5d6e05801f21271baa9c16da_1567491456403.jpg",paragraph2:'Cutting+Shampo at Rs.400',key:7,paragraph3:'20% off'},
      {title:"Sanrix Hair Salon",paragraph:"Sri Aurobindo Marg, Ansari Nagar, Ansari Nagar East, New Delhi, Delhi 110029",source:"https://images.jdmagicbox.com/comp/delhi/l9/011pxx11.xx11.170328110843.g8l9/catalogue/sanrix-unisex-salon-paschim-vihar-delhi-salons-47jebyu.jpg",paragraph2:'Cutting+Shampo at Rs.400',key:8,paragraph3:'20% off'},

  
  
  
  
    ];




    return(
        <View>
          
        <Header
        backgroundColor="black"
        leftComponent={<IIcon name="scissors" color="#fff" size={30} onPress={()=>this.props.navigation.navigate('adminHome')}/>}
        centerComponent={{text:"Search for salon",style:{color:"#fff",fontSize:25}}}
        />
        <SearchBar
        platform="android"
        placeholder="Search for salon"
        onChangeText={this.updateSearch}
        value={search}
      />
      
       <ImageBackground
        style={{width:'100%',height:'80%'}}
                    source={{uri:"https://www.pointarenalighthouse.com/wp-content/uploads/2019/10/salon-icon.png"}}>
     
     <ScrollView>
       {
       pre.map((pre,i)=>{
                return(
                    <CardLayouts key={i} title={pre.title} paragraph={pre.paragraph} source={pre.source} paragraph2={pre.paragraph2} paragraph3={pre.paragraph3} navigation={this.props.navigation} />
                    )
            })
  
          }
  
  </ScrollView>
    </ImageBackground>
      </View>
    )
}


}

const couponNavigator=createStackNavigator({
Book:{
  screen:book,
  navigationOptions:{
    headerShown:false
  }
},
salonsnear:{
  screen:salonsnear,
  navigationOptions:{
    headerShown:false
  }
},
details:{
  screen:details,
  navigationOptions:{
      headerShown:false
  }
},
adminHome:{
  screen:salonsnear,
  navigationOptions:{
    headerShown:false
  }
}
},{initialRouteName:'salonsnear'})

export default createAppContainer(couponNavigator);
