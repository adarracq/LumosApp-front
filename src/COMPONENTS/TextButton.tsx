import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

type textButtonProps = {
    text: string;
    color: string;
};

export default function TextButton(props: textButtonProps) {
    return (
        <View>
            <Text style={{ ...styles.title, color: props.color }}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'poppins-semibold',
        fontSize: 18,
    },
});
