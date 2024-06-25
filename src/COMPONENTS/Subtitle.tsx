import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

type subtitleProps = {
    title: string;
    color: string;
};

export default function Subtitle(props: subtitleProps) {
    return (
        <View>
            <Text style={{ ...styles.title, color: props.color }}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontFamily: 'poppins',
        textAlign: 'center',
        padding: 10,
        marginTop: 50,
    },
});
