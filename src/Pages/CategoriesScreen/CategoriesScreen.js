import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

import CategoryGridTitle from "../../Molekul/CategoryGridTitle/CategoryGridTitle";
import Input from '../../Molekul/Input/Input';

const CategoriesScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>Title</Text>
            <CategoryGridTitle/>
            <Input
              id="email"
              label="E-Mail"
              keyboardType="email-address"
              required
              email
              autoCapitalize="none"
              errorText="Please enter a valid email address."
              onInputChange={()=> {}}
              initialValue=""
            />
            <Input
              id="password"
              label="Password"
              keyboardType="default"
              secureTextEntry
              required
              minLength={5}
              autoCapitalize="none"
              errorText="Please enter a valid password."
              onInputChange={()=> {}}
              initialValue=""
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default CategoriesScreen;