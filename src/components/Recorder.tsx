import {AudioRecorder, AudioUtils} from 'react-native-audio';
import React, {useState, useEffect} from 'react';
import {RecordButton} from './RecordButton';
import {Time} from './Time';
import {MarginBottom} from './MarginBottom';
let audioPath = AudioUtils.DocumentDirectoryPath + '/recording.aac';

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
  const [currentTime, setTime] = useState(0);
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

    try {
      const filePath = await AudioRecorder.stopRecording();
      console.log(filePath);
      return filePath;
    } catch (error) {
      console.error(error);
    }
  };

  const onPress = () => {
    if (isRecording) {
      stop();
      return;
    }
    record();
  };
  return (
    <>
      <Time ellapsedTime={currentTime} />
      <MarginBottom margin={24} />
      <RecordButton isRecording={isRecording} onPress={onPress} />
    </>
  );
};
