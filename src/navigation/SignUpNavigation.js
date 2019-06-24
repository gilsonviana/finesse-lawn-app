import { createStackNavigator } from 'react-navigation'

import SignUpEmail from '../screens/SignUp/SignUpEmail'
import SignUpName from '../screens/SignUp/SignUpName'

const SignUpStack = createStackNavigator({
    SignUpEmail: {
        screen: SignUpEmail, 
        navigationOptions: {
            title: 'Create Account',
            headerTransparent: true,
            headerTitleStyle: {
                color: '#707070',
                marginLeft: 'auto',
                marginRight: 'auto'
            }
        }        
    },
    SignUpName: {
        screen: SignUpName, 
        navigationOptions: {
            title: 'Create Account',
            headerTransparent: true,
            headerTitleStyle: {
                color: '#707070',
                marginLeft: 'auto',
                marginRight: 'auto'
            }
        }        
    },
}, {
    initialRouteName: 'SignUpEmail'
})

export default SignUpStack