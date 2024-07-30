// components/Button/Button.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonCostum = ({ text, color, borderRadius, onPress }) => {
    return (
        <TouchableOpacity 
            style={[styles.button, { backgroundColor: color, borderRadius: borderRadius }]} 
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default ButtonCostum;
