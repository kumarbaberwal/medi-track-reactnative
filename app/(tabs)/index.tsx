import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'
import Header from '@/components/Header';
import EmptyState from '@/components/EmptyState';

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Header />
      <EmptyState />
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