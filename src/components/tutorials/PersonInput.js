import React from 'react'
import axios from 'axios'
import {
  Text, View, StyleSheet,
  ScrollView, FlatList, SafeAreaView,
  TextInput
} from 'react-native'


export default class PersonInput extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = { name: '' };
  // }

  state = {
    name: ''
  };


  _addPerson(text) {
    const user = {
      name: this.state.name
    };

    console.log("submitted?");

    axios.post('https://jsonplaceholder.typicode.com/users', { user })
      .then(res => console.log(this.state.name));
  }

  render() {
    return (
      <TextInput
        style={{height: 40}}
        placeholder="Enter Person Name"
        onChangeText={ (text) => this.setState({ name: text }) }
        onSubmitEditing = { this._addPerson.bind(this) }
        value={ this.state.name }
      />
    );
  }
}
