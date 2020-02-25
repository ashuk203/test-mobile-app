import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import styles from './../StyleSheets/styles.js'

export default function HookCounter(args) {
  const numCounters = 18;
  var counters = [];
  var setCounters = [];

  function navigateContacts() {
    args.navigation.navigate('Contacts');
  }

  // Create numCounters copies of SingleCounters
  for (var i = 0; i < numCounters; i++) {
    var [counter, setCounter] = useState(1); // Hooks library function
    counters.push(counter);
    setCounters.push(setCounter);
  }

  var counterComponents = [];
  var product = 1;

  for (var i = 0; i < numCounters; i++) {
    product *= counters[i];
    counterComponents.push(<SingleCounter num={counters[i]} numChange={setCounters[i]} />);
  }

  // Wrapper screen
  return (
    <View style={styles.container}>
      <Button
        title="Go to Contacts"
        onPress={navigateContacts}
      />
      {counterComponents}
      <Text style={styles.text}>Product: { product }</Text>
    </View>
  );
}

// Building -block subcomponent for a single counter
function SingleCounter(args) {
  function increaseCount() {
    args.numChange(args.num + 1);
  }

  function decreaseCount() {
    args.numChange(args.num - 1);
  }


  return (
    <View style={styles.countSetter}>
      <TouchableOpacity onPress={increaseCount}>
        <Text style={styles.text}>Increase</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{args.num}</Text>
      <TouchableOpacity onPress={decreaseCount}>
        <Text style={styles.text}>Decrease</Text>
      </TouchableOpacity>
    </View>
  );
}
