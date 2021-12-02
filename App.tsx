import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <View>
        <Text>some content</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
