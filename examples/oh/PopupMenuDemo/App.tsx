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

import Demo from './Demo'

export default function App() {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <View style={styles.container}>
          {Platform.OS === 'harmony' && (
            <Demo  />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#ffff00',
  },
  container: {
    padding: 24,
  }
});
