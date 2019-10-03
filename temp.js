import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class Temperature extends React.Component {

  constructor(props){
    super(props);
    this.state ={
    isLoading: true,
    data: ''
    }
  }

  componentDidMount(){
    return fetch('https://bodanucomputer.go.ro/php/temperature.php')
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
       <Text>{this.state.data.body}</Text>
       <Text>{this.state.data}</Text>
      </View>
    );
  }
}
