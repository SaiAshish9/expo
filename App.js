import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

// import NetInfo from '@react-native-community/netinfo';

import {Video} from 'expo-av'

// import VideoPlayer from 'expo-video-player'

import {Ionicons} from '@expo/vector-icons'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    
    <TouchableOpacity
    onPress={
      ()=>alert('hi')
    }
    >
    <Ionicons name='md-checkmark-circle' size={32}/>
    </TouchableOpacity>
    
    <Video
  source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
  rate={1.0}
  volume={1.0}
  isMuted={false}
  resizeMode="cover"
  shouldPlay
  isLooping
  style={{ width: 300, height: 300 }}
/>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:'black',
    borderWidth:2
  },
});
