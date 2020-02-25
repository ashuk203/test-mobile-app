import React, { Component } from 'react'
import {
  Image,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'

class CounterApp extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.countSetter}>
          <TouchableOpacity onPress={this.props.increaseCount}>
            <Text style={styles.text}>Increase</Text>
          </TouchableOpacity>
          <Text style={styles.text}>{this.props.count}</Text>
          <TouchableOpacity onPress={this.props.decreaseCount}>
            <Text style={styles.text}>Decrease</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.countSetter}>
          <TouchableOpacity onPress={this.props.increaseCount2}>
            <Text style={styles.text}>Increase</Text>
          </TouchableOpacity>
          <Text style={styles.text}>{this.props.count2}</Text>
          <TouchableOpacity onPress={this.props.decreaseCount2}>
            <Text style={styles.text}>Decrease</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>{this.props.prod}</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.reduxCount,
    count2: state.reduxCount2,
    prod: state.reduxCount * state.reduxCount2
  }
}

function matcDispatchToProps(dispatch) {
  return {
    increaseCount: () => dispatch({type: 'INCREASE_COUNT'}),
    decreaseCount: () => dispatch({type: 'DECREASE_COUNT'}),
    increaseCount2: () => dispatch({type: 'INCREASE_COUNT2'}),
    decreaseCount2: () => dispatch({type: 'DECREASE_COUNT2'})
  }
}


export default connect(mapStateToProps, matcDispatchToProps)(CounterApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20
  },
  countSetter: {
    flexDirection: 'row',
    width: 200,
    justifyContent: 'space-around'
  }
});
