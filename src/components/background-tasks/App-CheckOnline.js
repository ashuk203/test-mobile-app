import {useNetInfo} from '@react-native-community/netinfo';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';

export default (YourComponent = () => {
  const netInfo = useNetInfo();

  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      {/*<Text>Type: {netInfo.type} </Text>*/}
      {netInfo.isConnected && <Icon name="circle" size={20} color="green" />}
      {netInfo.isConnected && <Text> Online</Text>}
      {!netInfo.isConnected && (
        <Icon name="circle-thin" size={20} color="grey" />
      )}
      {!netInfo.isConnected && <Text> Offline</Text>}
    </View>
  );
});
