import React from 'react'
import axios from 'axios'
import PersonInput from './PersonInput'
import {
  Text, View, StyleSheet,
  ScrollView, FlatList, SafeAreaView,
  VirtualizedList, Button
} from 'react-native'


export default class PersonList extends React.Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        // console.log(res);
        this.setState({ persons: res.data });
      });
  }

  render() {
    return (
      // SafeAreaView
      <SafeAreaView style={{flex: 1}}>
        <PersonInput/>
        <Button
          title="Go to Blank"
          onPress={() => {
            this.props.navigation.navigate('Dummy');
          }}
        />
        <Button
          title="Push Blank"
          onPress={() => {
            this.props.navigation.push('Dummy');
          }}
        />
        <FlatList
          data={ this.state.persons }
          renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
        />
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
