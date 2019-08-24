import React from 'react';
import {FlatList, View, Text} from 'react-native';

export const ListScreen = () => (
  <FlatList
    data={[1, 2, 3]}
    renderItem={({item}) => {
      return (
        <View>
          <Text>{item}</Text>
        </View>
      );
    }}
  />
);
