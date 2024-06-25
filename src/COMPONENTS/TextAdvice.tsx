import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '../CONSTANTS/Colors';

type TextAdviceProps = {
    text: string;
};

export default function TextAdvice(props: TextAdviceProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        padding: 10,
        backgroundColor: Colors.lightBlue,
        borderRadius: 10,
    },
    text: {
        fontSize: 14,
        fontFamily: 'poppins-italic',
        textAlign: 'justify',
        color: Colors.white,
        padding: 20,
    },
});
