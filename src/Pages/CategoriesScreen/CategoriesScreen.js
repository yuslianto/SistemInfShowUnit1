import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

const CategoriesScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>Categories Screen</Text>
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

CategoriesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Categories Screen'
    };
};

export default CategoriesScreen;