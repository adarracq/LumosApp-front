import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '../CONSTANTS/Colors';

type SubtitlelightedProps = {
    text: string;
};

export default function SubtitleLighted(props: SubtitlelightedProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        backgroundColor: Colors.primary,
        width: '100%',
    },
    text: {
        fontSize: 20,
        fontFamily: 'poppins-bold',
        textAlign: 'center',
        color: Colors.lightGray,
        padding: 20,
    },
});
