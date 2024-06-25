import { View, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../CONSTANTS/Colors'

export default function PageContainer(props: any) {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: Colors.background,
        alignItems: 'center',
        width: '100%',
        objectFit: 'cover',
        paddingBottom: 100,
        paddingTop: 50,
        margin: 0
    },
})