import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {Header, Colors} from 'react-native/Libraries/NewAppScreen';
import {Button} from './Button';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lighter,
    flex: 1,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export const RecordScreen = () => {
  const usingHermes =
    typeof HermesInternal === 'object' && HermesInternal !== null;
  return (
    <View style={styles.container}>
      <Header />
      {!usingHermes ? null : (
        <View style={styles.engine}>
          <Text style={styles.footer}>Engine: Hermes</Text>
        </View>
      )}
      <View style={styles.body}>
        <Button onPress={() => {}} />
      </View>
    </View>
  );
};
