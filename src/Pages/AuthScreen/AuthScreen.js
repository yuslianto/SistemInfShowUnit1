import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView
} from "react-native";

import Input from '../../Molekul/Input/Input';
import Card from '../../Molekul/Card/Card';


const AuthScreen = ({navigation}) => {
    return (
        <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={10}
            style={styles.screen}
        >
            <View 
                style={styles.gradient}
            >
                <Card
                    style={styles.autContainer}
                >
                    <View>
                        <View
                            style={styles.titleConent}
                        >
                            <Text style={styles.titleLogin}>Please Login!!</Text>
                        </View>
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
                </Card>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex:1
    },
    gradient: {
        backgroundColor: '#b4edbc',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    autContainer: {
        width: '90%',
        maxWidth: 500,
        maxHeight: 500,
        padding: 10
    },
    titleConent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    titleLogin: {
        fontFamily: 'bold',
        fontSize: 20
    },
    btnConatiner: {
        backgroundColor: 'green',
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    txtBtn: {
        color: 'white',
        fontSize: 20
    }
});

AuthScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Auth Screen'
    };
};

export default AuthScreen;