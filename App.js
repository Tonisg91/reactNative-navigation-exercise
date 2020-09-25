import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from  'react-navigation-stack'
import { UsersScreen, PostsScreen, DetailScreen } from './screens/index'

const AppNavigator = createStackNavigator({
  Users: {
    screen: UsersScreen
  },
  Posts: {
    screen: PostsScreen
  },
  Detail: {
    screen: DetailScreen
  }
}, {initialRouteName: 'Users'})

export default createAppContainer(AppNavigator)
