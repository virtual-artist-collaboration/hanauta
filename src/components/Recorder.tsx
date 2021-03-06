import {AudioRecorder, AudioUtils} from 'react-native-audio';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Sound from 'react-native-sound';
import {RecordButton} from './RecordButton';
import {Time} from './Time';
import {MarginBottom} from './MarginBottom';
import {PlayButton} from './PlayButton';
import {UploadButton} from './UploadButton';
import {navigate} from '../navigations/NavigationService';
let audioPath = AudioUtils.DocumentDirectoryPath + '/recording.aac';

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
});
const prepareRecordingPath = () => {
  AudioRecorder.prepareRecordingAtPath(audioPath, {
    SampleRate: 22050,
    Channels: 1,
    AudioQuality: 'High',
    AudioEncoding: 'aac',
  });
};

export const Recorder = () => {
  const [isRecording, setRecording] = useState(false);
  const [isAuthorized, setAuthorized] = useState(false);
  const [sound, setSound] = useState<any>(null);
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
    prepareRecordingPath();
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
      setSound(
        new Sound(audioPath, '', error => {
          if (error) {
            console.log('failed to load the sound', error);
          }
        }),
      );
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

    if (!sound) {
      console.log('play: no sound');
      return;
    }
    sound.play((success: boolean) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  };

  const stopPlay = () => {
    if (!sound) {
      console.log('stopPlay: no sound');
      return;
    }
    sound.stop();
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
      <View style={styles.timeContainer}>
        <Time ellapsedTime={currentTime} />
        <MarginBottom margin={24} />
      </View>
      <View style={styles.buttons}>
        {isFinished ? (
          <View style={styles.buttonContainer}>
            <PlayButton
              onPlay={() => {
                play();
                setPlaying(true);
              }}
              onPause={() => {
                stopPlay();
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
            <UploadButton
              onPress={() => {
                navigate('Upload');
              }}
            />
          </View>
        ) : null}
      </View>
    </View>
  );
};
