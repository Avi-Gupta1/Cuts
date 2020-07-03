import * as React from 'react';
import {View} from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import adminhome from './adminhome';
import {Header} from 'react-native-elements';  
import Salons from './salonsnear';
import adminbook from './booking';


const RecentsRoute = () => <Text style={{marginTop:25,textAlign:'center'}}>This Page will display the bookings which user have made</Text>;

export default class adminDesk extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'coupons', title: 'Coupons', icon: 'content-copy',color:'black' },
      { key: 'salons', title: 'Salons', icon: 'content-cut',color:'black' },
      { key: 'recents', title: 'Your Bookings', icon: 'briefcase',color:'black' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    coupons: adminhome,
    salons: Salons,
    recents: adminbook,
  });

  render() {
    return (
       
       
      <BottomNavigation
      shifting={true}
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
      
      
    );
  }
}

