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
export default class Led extends React.Component {
  constructor(props){
      super(props);
      this.state ={
      isLoading: false,
      turnedOn: false,
      notLoading: false,
      data: []
      }
    }
  _turnOn = () => {

          this.setState({
            isLoading: true,
            turnedOn: true,
            notLoading: false,
          })
          fetch('https://maker.ifttt.com/trigger/button_pressed/with/key/duVDdKNC424T0YqyFG6btN',{
          method: "POST",
          dataType: "jsonp"
          })
          .then((response) => response.json())
                .then((responseJson) => {

                  this.setState({
                    isLoading: false,
                    notLoading: false,
                    turnedOn: true,
                    data: responseJson,
                  }, function(){
                  });

                })
                .catch((error) =>{
                  this.setState({
                      isLoading: false,
                      notLoading: false,
                      turnedOn: false,
                      data: "Eroare de comunicare"
                  });
                })
                .then((responseJson) => {
                    this.setState({
                        turnedOn: true,
                    })
                })
      };

 _turnOff = () => {
          this.setState({
              isLoading: false,
              notLoading: true,
              turnedOn: false,
            })
          fetch('https://maker.ifttt.com/trigger/off_button_pressed/with/key/duVDdKNC424T0YqyFG6btN',{
          method: "POST",
          dataType: "jsonp"
          })
          .then((response) => response.json())
              .then((responseJson) => {

                this.setState({
                isLoading: false,
                notLoading: true,
                turnedOn: false,
                  data: responseJson,
                }, function(){


                });

              })
              .catch((error) =>{
                this.setState({
                    isLoading: false,
                    notLoading: false,
                    turnedOn: false,
                    data: "Eroare de comunicare"
                });
              });
      };
  render() {
  if(this.state.isLoading){
        return(
        <>
          <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
          </View>
          <View style={{margin:10}}>
            <Button
               onPress={this._turnOff}
               color='#48BBEC'
               title='Stinge'
             />
             </View>
          </>
        )
      }
      if(this.state.notLoading){
      return(
        <>
          <View style={{margin:10}}>
            <Button
               onPress={this._turnOn}
               color='#48BBEC'
               title='Aprinde'
             />
         </View>
         <View style={{flex: 1, padding: 20}}>
             <ActivityIndicator/>
       </View>
       </>
       )
      }
      if(this.state.turnedOn){
        return (
    <>
      <View style={{margin:10}}>
        <Button
           onPress={this._turnOn}
           color='#00FF7F'
           title='Led-uri aprinse'
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
            )
        }else{
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
}
