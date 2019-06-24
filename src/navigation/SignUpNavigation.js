import { createStackNavigator } from 'react-navigation'

import SignUpEmail from '../screens/SignUp/SignUpEmail'

const SignUpStack = createStackNavigator({
    SignUp: {
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
    }
})

export default SignUpStack