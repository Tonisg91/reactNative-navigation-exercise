import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default ({ title, onPress }) => {
    return (
        <TouchableOpacity 
            onPress={onPress}
            style={styles.container}>
            <Text 
                style={styles.text} 
            >{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingHorizontal: 15
    },
    text: {
        fontSize: 18
    }
})