import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {ListItem} from '../components';
import {getList} from '../api';

type Sample = {
  description: string;
  title: string;
  url: string;
  user_name: string;
};

export const ListScreen = () => {
  const [samples, setSamples] = useState<Sample[]>([]);
  useEffect(() => {
    getList().then(({data}: {data: Sample[]}) => {
      setSamples(data);
    });
  }, []);

  return (
    <FlatList
      data={samples}
      renderItem={({item}) => {
        return <ListItem sample={item} onPress={() => {}} />;
      }}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
