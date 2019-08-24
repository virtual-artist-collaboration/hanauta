import React from 'react';
import {FlatList} from 'react-native';
import {ListItem} from '../components';

export const ListScreen = () => (
  <FlatList
    data={['Sample 1', 'Sample 2', 'Sample 3']}
    renderItem={({item}) => {
      return <ListItem title={item} onPress={() => {}} />;
    }}
    keyExtractor={(item, index) => index.toString()}
  />
);
