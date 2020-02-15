import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

const AuthScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Auth Screen</Text>
            <TouchableOpacity
            style={styles.btnConatiner}
                onPress={()=>{navigation.navigate('Categories')}}
            >
                <Text style={styles.txtBtn}>Click Here</Text>
            </TouchableOpacity>
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
        backgroundColor: 'blue'
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