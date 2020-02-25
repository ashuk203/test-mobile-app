import React, { Component } from 'react'
import { View, Button } from 'react-native'


class Blank extends Component {
  render() {
    return (
      <View>
        <Button
          title="Go to Contacts"
          onPress={() => {
            this.props.navigation.navigate('Contacts');
          }}
        />
        <Button
          title="Push Contacts"
          onPress={() => {
            this.props.navigation.push('Contacts');
          }}
        />
      </View>
    );
  }
}
export default Blank;
