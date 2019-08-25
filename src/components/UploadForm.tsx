import {AudioRecorder, AudioUtils} from 'react-native-audio';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet,TextInput,Text,Dimensions} from 'react-native';
import Sound from 'react-native-sound';
import {RecordButton} from './RecordButton';
import {Time} from './Time';
import {MarginBottom} from './MarginBottom';
import {normalText} from '../consts/fonts';
let audioPath = AudioUtils.DocumentDirectoryPath + '/recording.aac';
var { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
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
    alignItems:'stretch',
    backgroundColor: '#FFF',
    borderBottomColor: '#000000',
    justifyContent: 'center',
    width:width*0.9,
    borderBottomWidth: 1,
    maxHeight:30,
    fontSize:normalText
  },
  textInputDesc: {
    flex: 3,
    alignItems:'stretch',
    backgroundColor: '#FFF',
    borderBottomColor: '#000000',
    justifyContent: 'center',
    width:width*0.9,
    borderBottomWidth: 1,
    maxHeight:150,
    fontSize:normalText
  },
});
const prepareRecordingPath = () => {
  AudioRecorder.prepareRecordingAtPath(audioPath, {
    SampleRate: 22050,
    Channels: 1,
    AudioQuality: 'High',
    AudioEncoding: 'aac',
  });
};

export const UploadForm = () => {
  const [isRecording, setRecording] = useState(false);
  const [isAuthorized, setAuthorized] = useState(false);
  // 録音が終了したかのフラグ
  const [isFinished, setFinished] = useState(false);
  const [currentTime, setTime] = useState(0);
  const [isPlaying, setPlaying] = useState(false);
  useEffect(() => {
    AudioRecorder.requestAuthorization().then(result => {
      setAuthorized(result);

      if (!result) {
        return;
      }

      prepareRecordingPath();

      AudioRecorder.onProgress = data => {
        setTime(Math.floor(data.currentTime));
      };

      AudioRecorder.onFinished = data => {
        // TODO: android works differently
        console.log(data.status);
        console.log(data.audioFileURL);
      };
    });
  }, []);

  const record = async () => {
    if (!isAuthorized) {
      console.log('record:unauthorized');
      return;
    }
    if (isRecording) {
      console.log('record:already recording');
      return;
    }
    try {
      await AudioRecorder.startRecording();
      setRecording(true);
    } catch (error) {
      console.error(error);
      setRecording(false);
    }
  };

  const stop = async () => {
    if (!isRecording) {
      console.log('stop: is not recording');
      return;
    }

    setRecording(false);
    setFinished(true);
    try {
      const filePath = await AudioRecorder.stopRecording();
      console.log(filePath);
      return filePath;
    } catch (error) {
      console.error(error);
    }
  };

  const play = async () => {
    if (isRecording) {
      console.log('play: still recording');
      return;
    }

    // These timeouts are a hacky workaround for some issues with react-native-sound.
    // See https://github.com/zmxv/react-native-sound/issues/89.
    setTimeout(() => {
      var sound = new Sound(audioPath, '', error => {
        if (error) {
          console.log('failed to load the sound', error);
        }
      });

      setTimeout(() => {
        sound.play(success => {
          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
      }, 100);
    }, 100);
  };

  const onPress = () => {
    if (isRecording) {
      stop();
      return;
    }
    record();
  };
  return (
    <View style={styles.container}>
      <Text>タイトル</Text>
      <TextInput style={styles.textInputTitle}　blurOnSubmit={false}/>
      <Text>説明</Text>
      <TextInput style={styles.textInputDesc}　blurOnSubmit={false} numberOfLines={5} multiline={true}/>
      <View style={styles.timeContainer}>
        <Time ellapsedTime={currentTime} />
        <MarginBottom margin={24} />
      </View>
      {/* <View style={styles.buttons}>
        {isFinished ? (
          <View style={styles.buttonContainer}>
            <PlayButton
              onPlay={() => {
                play();
                setPlaying(true);
              }}
              onPause={() => {
                setPlaying(false);
              }}
              isPlaying={isPlaying}
            />
          </View>
        ) : null}
        <View style={styles.buttonContainer}>
          <RecordButton isRecording={isRecording} onPress={onPress} />
        </View>
        {isFinished ? (
          <View style={styles.buttonContainer}>
            <UploadButton onPress={() => {}} />
          </View>
        ) : null}
      </View> */}
    </View>
  );
};
