import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

type textCommonProps = {
    text: string;
    color: string;
};

export default function TextCommon(props: textCommonProps) {
    return (
        <View>
            <Text style={{ ...styles.title, color: props.color }}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontFamily: 'poppins',
        textAlign: 'justify',
        padding: 20,
    },
});
