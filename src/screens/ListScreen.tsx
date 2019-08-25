import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {ListItem} from '../components';
import {getList} from '../api';

type Sample = {
  description: string;
  title: string;
  url: string;
  user_name: string;
  id: string;
};

export const ListScreen = () => {
  const [samples, setSamples] = useState<Sample[]>([]);
  const fetch = () => {
    getList().then(({data}: {data: Sample[]}) => {
      setSamples(data);
    });
  }

  useEffect(() => {
    fetch()
  }, []);


  return (
    <FlatList
      data={samples}
      renderItem={({item}) => {
        return <ListItem sample={item} />;
      }}
      keyExtractor={(item) => item.id}
      onRefresh={fetch}
      refreshing={false}
    />
  );
};
