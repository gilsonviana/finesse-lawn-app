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

const OnBoardingStack = createStackNavigator({
    OnBoarding1: {
        screen: OnBoarding1   
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