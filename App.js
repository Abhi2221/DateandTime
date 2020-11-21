/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';




export default class Example extends Component {
  constructor() {
    super()
    this.state = {
      isVisible: false,
    }
  }
  handlePicker = () => {
    this.setState({
      isVisible: false,
    })
  }
  showPicker = () => {
    this.setState({
      isVisible: true
    })
  }
  hidePicker = () => {
    this.setState({
      isVisible: false
    })
  }

  render() {
    return (
      <View style={styles.container}>
      
        <TouchableOpacity style={styles.button} onPress={this.showPicker}>
          <Text style={styles.text}>Show Date Picker</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this.handlePicker}
          onCancel={this.hidePicker}
          mode = {"datetime"}
          is24Hour={false}
        >
        </DateTimePicker>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#F5FCFF'
  },
  button: {
    width: 250,
    height: 50,
    backgroundColor: '#330066',
    borderRadius: 30,
    justifyContent: 'center',
    marginTop: 15,
    marginLeft: 80
  },
  text: {
    fontSize: 18,
    color: '#fff',
    textAlign: "center",
    justifyContent: 'center'
  }

});

