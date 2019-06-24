import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import OnBoarding from './OnBoardingNavigation'
import SignUp from './SignUpNavigation'

export default createAppContainer(
    createSwitchNavigator({
        OnBoarding,
        SignUp
    })
)