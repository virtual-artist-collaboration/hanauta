import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {ListItem} from '../components';
import {getList} from '../api';

type Samples = {
  description: string;
  title: string;
  url: string;
  user_name: string;
};

export const ListScreen = () => {
  const [samples, setSamples] = useState<Samples[]>([]);
  useEffect(() => {
    getList().then(({data}: {data: Samples[]}) => {
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
