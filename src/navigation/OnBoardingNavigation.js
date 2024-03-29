import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import React from 'react'

/**
 * Custom bottom tab component
 */
import OnBoardingBottomTab from '../components/OnBoardingBottomTab'

/*
 * On Boarding screen
 */
import OnBoarding1 from '../screens/OnBoarding/OnBoarding1';
import OnBoarding2 from '../screens/OnBoarding/OnBoarding2';
import OnBoarding3 from '../screens/OnBoarding/OnBoarding3';


const OnBoardingStack = createStackNavigator({
    OnBoarding1: {
        screen: OnBoarding1   
    },
    OnBoarding2: {
        screen: OnBoarding2
    },
    OnBoarding3: {
        screen: OnBoarding3
    }
}, {
    defaultNavigationOptions: {
        header: null
    }
})

export default createBottomTabNavigator({
    OnBoardingStack
}, {
    tabBarComponent: props => <OnBoardingBottomTab {...props} />
})