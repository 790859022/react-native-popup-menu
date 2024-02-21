import * as React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  I18nManager,
  Switch,
} from 'react-native';

import BaseDemo from './BaseDemo'

export default function App() {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <View style={styles.container}>
          {Platform.OS === 'harmony' && (
            <BaseDemo  />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#F5FCFF',
  },
  container: {
    padding: 24,
    paddingBottom: 60,
  },
  title: {
    fontSize: 18,
  },
  elementContainer: {
    marginTop: 8,
  },
  heading: {
    fontSize: 22,
    color: 'black',
  },
  rtlSwitchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingTop: 20,
  },
});
