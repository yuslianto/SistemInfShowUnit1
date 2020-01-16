import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

const CategoryGridTitle = (props) => {
    return (
        <View style={styles.container}>
            <Text>Title</Text>
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

export default CategoryGridTitle;