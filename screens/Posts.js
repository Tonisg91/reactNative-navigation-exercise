import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, FlatList } from 'react-native'
import ListItem from '../components/ListItem'

export default ({ navigation }) => {
    const userId = navigation.getParam('user_id')
    const username = navigation.getParam('username')
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        setPosts(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    const navigateToPostDetails = item => {
        navigation.navigate('Detail', { 
            title: item.title, 
            body: item.body,
            username: username
        })
    }

    return (
        <View style={styles.container}>
            {loading ? <Text>Cargando...</Text> :
                <FlatList
                    style={styles.list}
                    data={posts.filter(x => x.userId === userId)}
                    keyExtractor={x => String(x.id)}
                    renderItem={({ item }) => 
                        <ListItem 
                            title={item.title} 
                            onPress={() => navigateToPostDetails(item)} 
                        />
                    }
                />
            }
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    list: {
        alignSelf: "stretch"
    }
});
