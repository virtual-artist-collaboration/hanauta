import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {weakTextColor} from '../consts/colors';
import {PlayButton} from './PlayButton';
import {MarginRight} from './MarginRight';
import {DownloadButton} from './DownloadButton';
import Sound from 'react-native-sound';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {fontWeight: 'bold'},
  author: {color: weakTextColor},
  content: {flex: 1},
});

type Sample = {
  description: string;
  title: string;
  url: string;
  user_name: string;
};

type Props = {
  sample: Sample;
  onPress: () => void;
};

export const ListItem = ({sample, onPress}: Props) => {
  const [isPlaying, setPlaying] = useState(false);
  const [sound, setSound] = useState<any>(null);
  useEffect(() => {
    const temp = new Sound(sample.url, '', error => {
      if (error) {
        console.log('failed to load the sound', error);
      }
    });
    setSound(temp);
  }, [sample.url]);
  const play = () => {
    if (!sample.url) {
      return null;
    }
    if (!sound) {
      return;
    }

    sound.play((success: boolean) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
        setPlaying(false);
      }
    });
    setPlaying(true);
  };

  const stop = () => {
    if (!sample.url) {
      return null;
    }
    if (!sound) {
      return;
    }
    sound.stop();
    setPlaying(false);
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <PlayButton
          isPlaying={isPlaying}
          onPlay={() => {
            play();
          }}
          onPause={() => {
            stop();
          }}
        />
        <MarginRight margin={16} />
        <View style={styles.content}>
          <Text style={styles.author}>{sample.user_name}</Text>
          <Text style={styles.title}>{sample.title}</Text>
          <Text>{sample.description}</Text>
        </View>
        <DownloadButton onPress={() => {}} />
      </View>
    </TouchableOpacity>
  );
};
