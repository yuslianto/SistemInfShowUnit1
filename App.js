import React from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";

import AppContainer from './src/Template/navigation/NavigatorApp';

const App = (props) => {
  return (
    <AppContainer/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;