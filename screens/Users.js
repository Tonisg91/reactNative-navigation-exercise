import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, FlatList, Text } from 'react-native'
import ListItem from '../components/ListItem'

export default ({ navigation }) => {
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setUsers(data)
        setLoading(false)
    }

    const navigateToUserPosts = item => {
        navigation.navigate('Posts', { 
            user_id: item.id,
            username: item.name
        })
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <View style={styles.container}>
            {loading ? <Text>Cargando...</Text> :
                <FlatList 
                    style={styles.list}
                    data={users}
                    keyExtractor={x => String(x.id)}
                    renderItem={({item}) => 
                        <ListItem 
                            title={item.name} 
                            onPress={() => 
                                navigateToUserPosts(item)
                            }
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
