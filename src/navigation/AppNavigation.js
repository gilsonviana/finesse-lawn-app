import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import OnBoarding from './OnBoardingNavigation'

export default createAppContainer(
    createSwitchNavigator({
        OnBoarding
    })
)