import React, {Component} from 'react';
import Dropdown from './react-native-material-dropdown';

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

    return <Dropdown label="Favorite Fruit" data={data} itemCount={4} />;
  }
}
