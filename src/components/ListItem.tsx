import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {weakTextColor} from '../consts/colors';
import {PlayButton} from './PlayButton';
import {MarginRight} from './MarginRight';
import {DownloadButton} from './DownloadButton';

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
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <PlayButton
          isPlaying={isPlaying}
          onPlay={() => {
            setPlaying(true);
          }}
          onPause={() => {
            setPlaying(false);
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
