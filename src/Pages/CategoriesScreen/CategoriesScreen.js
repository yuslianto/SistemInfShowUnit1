import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

import CategoryGridTitle from "../../Molekul/CategoryGridTitle/CategoryGridTitle";

const CategoriesScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>Title</Text>
            <CategoryGridTitle/>
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