import React, {Component} from 'react';
import Dropdown from './react-native-material-dropdown';
import NightTheme from '../../stylesheets/NightTheme';
import {Text, View} from 'react-native';

export default class Example extends Component {
  render() {
    let data = [
      {
        value: 'Banana',
      },
      {
        value: 'Mango',
      },
      {
        value: 'Pear',
      },
      {
        value: 'Grape',
      },
      {
        value: 'Orange',
      },
      {
        value: 'Peach',
      },
      {
        value: 'Kiwi',
      },
      {
        value: 'Apple',
      },
      {
        value: 'Pomegranate',
      },
    ];

    return (
      <View>
        <Text>
          Example text above. You can place additional content up here
        </Text>
        <Text>
          Example text above. You can place additional content up here
        </Text>
        <Text>
          Example text above. You can place additional content up here
        </Text>
        <Text>
          Example text above. You can place additional content up here
        </Text>
        <Text>
          Example text above. You can place additional content up here
        </Text>
        <Text>
          Example text above. You can place additional content up here
        </Text>
        <Dropdown
          data={data}
          itemCount={4}
          inputTextStyle={NightTheme.Text.style}
          containerStyle={NightTheme.SearchBar.inputContainerStyle}
          pickerStyle={NightTheme.ListItem.containerStyle}
          itemColor={'grey'}
          textColor={'grey'}
        />
        <Text>Example text below</Text>
      </View>
    );
  }
}
