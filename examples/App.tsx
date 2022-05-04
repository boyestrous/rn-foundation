import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { CenterView } from 'rn-foundation';

export default function App() {
  return (

    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{backgroundColor: 'navy', width: '80%', height: 200, borderRadius: 10, alignSelf: 'center'}}>
          <Text style={{color: 'white'}}>Parent of CenterView</Text>
          <CenterView>
            <Text>CenterView will vertically and horizontally center any children components within the parent component</Text>
            <Text>Multiple children will stack vertically</Text>
          </CenterView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
