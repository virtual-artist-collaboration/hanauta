import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {fontWeight: 'bold'},
});
type Props = {
  title: string;
  onPress: () => void;
};

export const ListItem = ({title, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
