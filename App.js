import React, {Component, useState, useEffect} from 'react';
import QRCode from 'react-native-qrcode';

import {StyleSheet, View, Text, Button} from 'react-native';
import {RNCamera} from 'react-native-camera';

export default function HelloWorld(args) {
  var [showCamera, setCamera] = useState(true);

  function barcodeRecognized({barcodes}) {
    barcodes.forEach(barcode => console.warn(barcode.data));
  }

  function toggleMessage() {
    if (showCamera) {
      return 'Hide';
    } else {
      return 'Show';
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          onPress={() => setCamera(!showCamera)}
          title={toggleMessage() + ' Camera'}
        />
      </View>
      <View style={styles.camera}>
        {showCamera && (
          <RNCamera
            ref={ref => {
              camera = ref;
            }}
            style={{flex: 1}}
            onGoogleVisionBarcodesDetected={barcodeRecognized}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    flex: 4,
    width: '100%',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
});
