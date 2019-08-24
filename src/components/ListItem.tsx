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
  padding: {flex: 1},
});
type Props = {
  title: string;
  onPress: () => void;
};

export const ListItem = ({title, onPress}: Props) => {
  const [isPlaying, setPlaying] = useState(false);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <PlayButton
          isPlaying={isPlaying}
          onPress={() => {
            setPlaying(!isPlaying);
          }}
        />
        <MarginRight margin={16} />
        <View>
          <Text style={styles.author}>naturalclar</Text>
          <Text style={styles.title}>{title}</Text>
          <Text>description</Text>
        </View>
        <View style={styles.padding} />
        <DownloadButton onPress={() => {}} />
      </View>
    </TouchableOpacity>
  );
};
