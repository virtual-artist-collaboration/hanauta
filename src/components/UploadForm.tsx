import {AudioUtils} from 'react-native-audio';
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {MarginBottom} from './MarginBottom';
import {normalText} from '../consts/fonts';
import {postRecording} from '../api';
import {primaryColor, secondaryColor, white} from '../consts/colors';
import {pop} from '../navigations/NavigationService';
let audioPath = AudioUtils.DocumentDirectoryPath + '/recording.aac';
var {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: secondaryColor,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  timeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textInputTitle: {
    flex: 3,
    alignItems: 'stretch',
    backgroundColor: '#FFF',
    borderBottomColor: '#000000',
    justifyContent: 'center',
    width: width * 0.9,
    borderBottomWidth: 1,
    maxHeight: 30,
    fontSize: normalText,
  },
  textInputDesc: {
    flex: 3,
    alignItems: 'stretch',
    backgroundColor: '#FFF',
    borderBottomColor: '#000000',
    justifyContent: 'center',
    width: width * 0.9,
    maxHeight: 30,
    borderBottomWidth: 1,
    fontSize: normalText,
  },
});

export const UploadForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  return (
    <View style={styles.container}>
      <Text>タイトル</Text>
      <TextInput
        style={styles.textInputTitle}
        blurOnSubmit={false}
        value={title}
        onChangeText={setTitle}
      />
      <Text>説明</Text>
      <TextInput
        style={styles.textInputDesc}
        blurOnSubmit={false}
        value={description}
        onChangeText={setDescription}
      />

      <MarginBottom margin={24} />

      <TouchableOpacity
        onPress={() => {
          postRecording(audioPath, {title, description});
          pop();
        }}>
        <View
          style={{
            backgroundColor: primaryColor,
            padding: 16,
            borderRadius: 30,
            alignSelf: 'stretch',
          }}>
          <Text style={{color: white}}>アップロード</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
