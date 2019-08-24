import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, MarginBottom, Time} from '../components';
import {secondaryColor} from '../consts/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    backgroundColor: secondaryColor,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const RecordScreen = () => {
  const [isRecording, setRecording] = useState(false);
  const [recordTime, setRecordTime] = useState(0);
  useEffect(() => {
    const tid = setTimeout(() => {
      if (isRecording) {
        setRecordTime(recordTime + 1);
      }
    }, 1000);
    return () => {
      clearTimeout(tid);
    };
  }, [isRecording, recordTime]);
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Time ellapsedTime={recordTime} />
        <MarginBottom margin={24} />
        <Button
          onPress={() => {
            setRecording(!isRecording);
          }}
          isRecording={isRecording}
        />
      </View>
    </View>
  );
};
