import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import OnBoarding from './OnBoardingStack'

export default createAppContainer(
    createSwitchNavigator({
        OnBoarding
    })
)