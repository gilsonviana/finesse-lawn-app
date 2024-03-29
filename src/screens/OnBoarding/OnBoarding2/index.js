import React from 'react'
import { ScrollView, View, Image } from 'react-native'
import { ThemeProvider } from 'styled-components'
import GestureRecognizer from 'react-native-swipe-gestures'

import Dots from '../../../components/Dots'

import styles from './style'
import theme from '@styled/theme'
import { Title, Text } from '@styled/components'

const OnBoarding2 = props => {
    const handleSwipeLeft = () => props.navigation.navigate('OnBoarding3')

    const handleSwipeRight = () => props.navigation.navigate('OnBoarding1')

    return (
        <GestureRecognizer
            onSwipeRight={() => handleSwipeRight()}
            onSwipeLeft={() => handleSwipeLeft()}
            config={{
                velocityThreshold: 0.3,
                directionalOffsetThreshold: 80
            }}
            style={{ flex: 1 }}>
            <ScrollView style={styles.scrollView}>
                <ThemeProvider theme={theme}>
                    <View style={styles.container}>
                        <Image source={require('@assets/images/man-looking.png')} style={styles.image} resizeMode="contain" />
                        <Title center style={styles.title}>Receive proposals</Title>
                        <Text center>
                            Contractors will find your project
                            and contact you to supply the
                            needs for your project
                        </Text>
                        <Dots amount={3} current={2}/>
                    </View>
                </ThemeProvider>
            </ScrollView>
        </GestureRecognizer>
    )
}

export default OnBoarding2