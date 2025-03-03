import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'
import Header from '@/components/Header';

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Header />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 25,
    height: '100%',
  }
});