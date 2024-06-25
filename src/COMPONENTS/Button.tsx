import { TouchableOpacity, StyleSheet, View } from 'react-native'
import React from 'react'

type ButtonProps = {
    children: any;
    color: string;
    isEnabled: boolean;
    onPress: () => void;
};

export default function Button(props: ButtonProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{ ...styles.button, backgroundColor: props.color, opacity: props.isEnabled ? 1 : 0.5 }}
                onPress={props.onPress}>
                {props.children}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    button: {
        padding: 10,
        borderRadius: 10,
        margin: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})