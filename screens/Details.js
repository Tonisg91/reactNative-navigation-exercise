import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, FlatList } from 'react-native'
import ListItem from '../components/ListItem'

export default ({ navigation }) => {
    const body = navigation.getParam('body')
    const title = navigation.getParam('title')
    const username = navigation.getParam('username')
    return (
        <View style={styles.container}>
            <Text>{username}</Text>
            <Text>{title}</Text>
            <Text>{body}</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
