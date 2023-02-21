/* @flow weak */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
  Image,
} from 'react-native';
import {Styles, Constants} from '../global';

const UploadProof = props => {
  return (
    <View style={{backgroundColor: 'green'}}>
      <Text>Upload Proofs</Text>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
        }}>
        <View style={{width: '25%'}}>
          <TouchableHighlight>
            <Image
              style={styles.imagestyle}
              resizeMode="contain"
              source={Constants.uploadIcon}
            />
          </TouchableHighlight>
        </View>
        <View style={{width: '25%'}}>
          <TouchableHighlight>
            <Image
              style={styles.imagestyle}
              resizeMode="contain"
              source={Constants.uploadIcon}
            />
          </TouchableHighlight>
        </View>
        <View style={{width: '25%'}}>
          <TouchableHighlight>
            <Image
              style={styles.imagestyle}
              resizeMode="contain"
              source={Constants.uploadIcon}
            />
          </TouchableHighlight>
        </View>
        <View style={{width: '25%'}}>
          <TouchableHighlight>
            <Image
              style={styles.imagestyle}
              resizeMode="contain"
              source={Constants.uploadIcon}
            />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    backgroundColor: 'white',
  },
  imagestyle: {width: 36, height: 36, top: 5, right: 5},
});

export default UploadProof;
