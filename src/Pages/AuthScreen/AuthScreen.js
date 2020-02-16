import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import Input from '../../Molekul/Input/Input';

const AuthScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Auth Screen</Text>
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
                errorText="Please enter a valid password"
                onInputChange={()=> {}}
                initialValue=""
            />
            <View style={styles.btnConatiner}>
                <TouchableOpacity
                style={styles.btnConatiner}
                    onPress={()=>{navigation.navigate('Categories')}}
                >
                    <Text style={styles.txtBtn}>Click Here</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnConatiner: {
        backgroundColor: 'blue',
        marginTop: 10,
    },
    txtBtn: {
        color: 'white'
    }
});

AuthScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Auth Screen'
    };
};

export default AuthScreen;