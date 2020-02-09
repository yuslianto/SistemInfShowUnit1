import React from "react";
import { 
    View,
    Text,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform,
    StyleSheet
} from "react-native";

const CategoryGridTitle = (props) => {
    return (
        <View style={styles.gridItem}>
            <TouchableOpacity
            style={{flex:1}}
            >
                <View
                    style={styles.container}
                >
                    <Text style={styles.title}>Category Grid Title Test 1</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: Platform.OS === 'android' && Platform.Version >= 21
            ? 'hidden'
            : 'visible',
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 0.26,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 10,
        elevation: 10,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'Roboto-Bold',
        fontSize: 22,
        textAlign: 'center'
    }
});

export default CategoryGridTitle;