'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image,
} from 'react-native';

type Props = {};
export default class Led extends Component<Props> {
  static navigationOptions = {
    title: 'Property Finder',
  }
  _turnOn = () => {
          fetch('https://maker.ifttt.com/trigger/button_pressed/with/key/duVDdKNC424T0YqyFG6btN',{
          method: "POST",
          dataType: "jsonp"
          })
      };

 _turnOff = () => {
          fetch('https://maker.ifttt.com/trigger/off_button_pressed/with/key/duVDdKNC424T0YqyFG6btN',{
          method: "POST",
          dataType: "jsonp"
          })
      };
  render() {
    return (
    <>
      <View style={{margin:10}}>
                    <Button
                       onPress={this._turnOn}
                       color='#48BBEC'
                       title='Aprinde'
                     />
                     </View>
                     <View style={{margin:10}}>
                      <Button
                         onPress={this._turnOff}
                         color='#48BBEC'
                         title='Stinge'
                       />
                       </View>
                       </>
    );
  }
}
