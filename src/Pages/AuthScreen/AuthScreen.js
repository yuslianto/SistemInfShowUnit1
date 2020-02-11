import React from "react";
import { 
    View,
    Text,
    Button,
    StyleSheet
} from "react-native";

import Input from '../../Molekul/Input/Input';

const AuthScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>Auth Screen</Text>
            <View style={styles.container}>
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
        <Button
            title="Log In"
            onpres={()=> {}}
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

export default AuthScreen;