import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Colors} from 'react-native/Libraries/NewAppScreen';
import {Button, Icon} from '../components';
import {navigate} from '../navigations/NavigationService';
import {Time} from '../components/Time';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lighter,
    flex: 1,
  },
  body: {
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const RecordScreen = () => {
  const [isRecording, setRecording] = useState(false);
  const [recordTime, setRecordTime] = useState(3659);
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
      <Header />
      <View style={styles.body}>
        <Time ellapsedTime={recordTime} />
        <View style={{marginBottom: 24}} />
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

RecordScreen.navigationOptions = () => {
  return {
    title: 'マイページ',
    headerRight: <Icon name="list-ul" onPress={() => navigate('List')} />,
  };
};
