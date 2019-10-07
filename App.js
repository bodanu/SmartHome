/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
'use strict';

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Led from './led';
import Bugs from './bugs';
import Light from './light';
import Temperature from './temp';
import TemperatureLocal from './temperature';
import Update from './update';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';




class Home extends React.Component {
static navigationOptions = {
    title: 'Aplicatie pentru controlul casei',
  };
  render() {
    return (
        <>
    <StatusBar barStyle="dark-content" backgroundColor= "white" />

          <SafeAreaView>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}>

              <Text style={styles.cacao}>Smart Home</Text>
              <View style={styles.img}>
              <Image source={require('./Resources/house.png')} style={styles.image}/>
              </View>
              <Text style={styles.sectionDescription}>Aplicatie in faza de dezvoltare, functionalitate limitata
              </Text>
              <View style={{margin:10}}>
                 <Button onPress={() => this.props.navigation.navigate('Dispozitive')} color='#48BBEC' title="Vezi Dispozitive" />
               </View>
               <View style={{margin:10}}>
                <Button onPress={() => this.props.navigation.navigate('More')} color='#48BBEC' title="Vezi Urmatoarele proiecte" />
              </View>
            </ScrollView>
          </SafeAreaView>
        </>
    )
    }
    }

class More extends React.Component {
static navigationOptions = {
    title: 'Proiecte pentru viitor',
  };
  render() {
    return (
        <>
    <StatusBar barStyle="dark-content" backgroundColor= "white" />

          <SafeAreaView>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}>

              <Text style={styles.cacao}>Viitoare proiecte</Text>
              <View style={styles.img}>
              <Image source={require('./Resources/house.png')} style={styles.image}/>
              </View>
              <Text style={styles.sectionDescription}>In constructie...
              </Text>

            </ScrollView>
          </SafeAreaView>
        </>
    )
    }
    }

class Dispozitive extends React.Component {
static navigationOptions = {
    title: 'Dispozitive',
  };
  render() {
    return (

        <>

          <StatusBar barStyle="dark-content" backgroundColor= "white" />

          <SafeAreaView>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}>

              <Text style={styles.cacao}>Smart home controls</Text>
              <View style={styles.img}>
              <Image source={require('./Resources/house.png')} style={styles.image}/>
              </View>
              <Text style={styles.sectionDescription}>Aplicatie in faza de dezvoltare, functionalitate limitata
              </Text>
              {global.HermesInternal == null ? null : (
                <View style={styles.engine}>
                  <Text style={styles.footer}>Engine: Hermes</Text>
                </View>
              )}
              <View style={styles.body}>
                <View style={styles.sectionContainer}>
                  <Text style={styles.sectionTitle}>Banda LED</Text>
                  <Text style={styles.sectionDescription}>
                    Aprinde sau stinge banda LED de pe terasa
                  </Text>

                   <Led/>

                </View>
                <View style={styles.sectionContainer}>
                  <Text style={styles.sectionTitle}>Lumina Secundara</Text>
                  <Text style={styles.sectionDescription}>
                    Aprinde sau stinge lumina secundara de pe terasa
                  </Text>
                  <Light/>
                </View>
                <View style={styles.sectionContainer}>
                  <Text style={styles.sectionTitle}>Dispozitiv Anti-insecte</Text>
                  <Text style={styles.sectionDescription}>
                    Porneste sau opreste dispozitivul anti-insecte
                  </Text>
                  <Bugs/>
                </View>
                <View style={styles.sectionContainer}>
                  <Text style={styles.sectionTitle}>Temperatura</Text>
                  <Text style={styles.sectionDescription}>Vezi temperatura de afara/inauntru (momentan in faza de dezvoltare)</Text>
                    <TemperatureLocal />
                </View>
                <View style={styles.bottomSection}>
                <View style={{margin:10}}>
                 <Button onPress={() => this.props.navigation.navigate('Home')} color='#48BBEC' title='Inapoi Acasa' />
               </View>
                <View style={styles.sectionContainer}>
                  <Text style={styles.sectionTitle}>Actualizari</Text>
                    <Update />
                </View>
                </View>
                <Text style={styles.sectionDescription}>{'\u00A9'}Bogdan Hiriscau - 2019</Text>
              </View>
            </ScrollView>
          </SafeAreaView>
        </>
      );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#fff",
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  cacao: {
    color: Colors.red,
    fontWeight: '600',
    fontSize: 30,
    textAlign: 'center',
  },
  img:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    backgroundColor: "#fff",
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  bottomSection: {
    marginTop: 32,
  }
});

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Dispozitive: {
    screen: Dispozitive
  },
  More: {
    screen: More
  },
});

export default createAppContainer(AppNavigator);
