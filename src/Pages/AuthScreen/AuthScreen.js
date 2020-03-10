import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    Image
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
                <Image
                    style={styles.logo}
                    source={require("../../Template/img/Logo/logoSS.png")}
                />
                <Card
                    style={styles.autContainer}
                >
                    <ScrollView>
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
                        <View 
                            style={styles.forgotContent}
                        >
                            <TouchableOpacity
                            //style={styles.btnConatiner}
                                onPress={()=>{navigation.navigate('Categories')}}
                            >
                                <Text style={styles.forgotPss}>Forgot Password?</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.btnConatiner}>
                            <TouchableOpacity
                            //style={styles.btnConatiner}
                                onPress={()=>{navigation.navigate('Categories')}}
                            >
                                <Text style={styles.txtBtn}>Log In</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.btnConatinerSignUp}>
                            <TouchableOpacity
                            //style={styles.btnConatinerSignUp}
                                onPress={()=>{}}
                            >
                                <Text style={styles.btnSignUp}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
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
    logo: {
        width: 250,
        height: 150,
        resizeMode: "stretch",
        marginBottom: 10
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
    forgotContent: {
        flex: 1,
        marginBottom: 15
    },
    forgotPss:{
        textAlign: 'center',
        color: 'green',
        fontSize: 13
    },
    btnConatiner: {
        backgroundColor: 'green',
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 5
    },
    txtBtn: {
        color: 'white',
        fontSize: 20
    },
    btnConatinerSignUp: {
        backgroundColor: 'white',
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'green',
        padding: 5
    },
    btnSignUp: {
        color: 'green',
        fontSize: 20
    }
    
});

AuthScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Auth Screen',
        header: null
    };
};

export default AuthScreen;