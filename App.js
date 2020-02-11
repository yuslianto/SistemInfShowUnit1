import React from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";

import CategoriesScreen from './src/Pages/CategoriesScreen/CategoriesScreen';
import AuthScreen from './src/Pages/AuthScreen/AuthScreen';

const App = (props) => {
  return (
    //<CategoriesScreen/>
    <AuthScreen/>
  );
};

const styles = StyleSheet.create({
});

export default App;