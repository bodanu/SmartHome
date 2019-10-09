import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet,  } from 'react-native';

export default class TemperatureLocal extends React.Component {

  constructor(props){
    super(props);
    this.state ={
    isLoading: true,
    data: []
    }
  }

  componentDidMount(){
    return fetch('https://smart-home-controler.herokuapp.com/',{
    crossDomain: true,
     method: "GET"
    })
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          data: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        this.setState({
            isLoading: false,
            data: "Eroare de comunicare"
        });
      });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
       <Text style={styles.result}>{this.state.data} °C</Text>
      </View>
    );
  }
};
const styles = StyleSheet.create({
    result:{
        fontWeight: '600',
        fontSize: 30,
        textAlign: 'center',
    }
})
