import React from 'react';
import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
} from 'react-native';
import {AuthBackground, Logo} from '../images';
import {white} from '../consts/colors';
import {largeText} from '../consts/fonts';
import {MarginBottom} from '../components';
import {LoginButton} from '../components/LoginButton';

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 2,
  },
  background: {...StyleSheet.absoluteFillObject},
  image: {width: '100%', height: '100%'},

  headingText: {
    color: white,
    fontSize: largeText,
    fontWeight: 'bold',
  },
  padding: {flex: 1},
  credit: {bottom: 48, alignItems: 'center'},
  creditText: {color: white, zIndex: 1},
});

export const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.overlay} />
        <ImageBackground source={AuthBackground} style={styles.image} />
        <SafeAreaView style={styles.credit}>
          <Text style={styles.creditText}>
            Photo by Banter Snaps on Unsplash
          </Text>
        </SafeAreaView>
      </View>
      <SafeAreaView style={styles.container}>
        <MarginBottom margin={120} />
        <Image source={Logo} />
        <MarginBottom margin={24} />
        <Text style={styles.headingText}>思いつきを、カタチにしよう</Text>
        <View style={styles.padding} />
        <LoginButton onPress={() => {}} />
        <MarginBottom margin={48} />
      </SafeAreaView>
    </View>
  );
};
