import React, {useState} from "react";
import { 
  View,
  Text,
  TextInput,
  Button,
  StyleSheet
} from "react-native";

const simpleCalculator = (props) => {
  
  const [enterValue, setEnteredValue] = useState('');
  const [enterValue2, setEnteredValue2] = useState('');
  const [resultNumber, setResultNumber] = useState('');

  
  const numberInput = (inputText) => {
    setEnteredValue(inputText);
    console.warn(inputText);
  };

  const numberInput2 = (inputText) => {
    setEnteredValue2(inputText);
    console.warn(inputText);
  };

  
  const onSubmitValue = () => {
    const choosenNumber1 = parseInt(enterValue);
    const choosenNumber2 = parseInt(enterValue2);
    const result = choosenNumber1 * choosenNumber2;
    setResultNumber(result);
    console.warn("this is", result)

  };

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <Text>Nilai Pertama</Text>
        <TextInput
          style={styles.textInput}
          keyboardType='number-pad'
          returnKeyType="next"
          onChangeText={numberInput}
          value={enterValue}
        />
      </View>
      <View style={styles.textInputContainer}>
        <Text>Nilai Kedua</Text>
        <TextInput
          style={styles.textInput}
          keyboardType='number-pad'
          returnKeyType="go"
          onChangeText={numberInput2}
          value={enterValue2}
        />
      </View>
      <Button
        title="SUBMIT"
        onPress={onSubmitValue}
      />
      <View style={styles.result}>
        <Text style={styles.text}>{resultNumber}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    padding: 10
  },
  textInputContainer: {
    //flex: 1,
    width: '100%',
    height: 80,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  textInput: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1
  },
  result: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 50,
    fontFamily: 'bold'
  }
});

export default simpleCalculator;