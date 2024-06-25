import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '../CONSTANTS/Colors';

type TitleMainProps = {
    title: string;
};

export default function TitleMain(props: TitleMainProps) {
    return (
        <View>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontFamily: 'poppins-semibold',
        color: Colors.primary,
        textAlign: 'center',
        padding: 10,
    },
});
