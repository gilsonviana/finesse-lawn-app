import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import OnBoarding from './OnBoardingNavigation'
import SignUp from './SignUpNavigation'
import NewProject from './NewProjectNavigation'

export default createAppContainer(
    createSwitchNavigator({
        OnBoarding,
        SignUp,
        NewProject
    })
)