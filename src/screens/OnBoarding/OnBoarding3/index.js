import React from 'react'
import { ScrollView, View, Image } from 'react-native'
import { ThemeProvider } from 'styled-components'
import GestureRecognizer from 'react-native-swipe-gestures'

import Dots from '../../../components/Dots'

import styles from './style'
import theme from '@styled/theme'
import { Title, Text } from '@styled/components'

const OnBoarding2 = props => {
    const handleSwipeRight = () => props.navigation.navigate('OnBoarding2')

    return (
        <GestureRecognizer
            onSwipeRight={() => handleSwipeRight()}
            config={{
                velocityThreshold: 0.3,
                directionalOffsetThreshold: 80
            }}
            style={{ flex: 1 }}>
            <ScrollView style={styles.scrollView}>
                <ThemeProvider theme={theme}>
                    <View style={styles.container}>
                        <Image source={require('@assets/images/house-lawn.png')} style={styles.image} resizeMode="contain" />
                        <Title center style={styles.title}>Get service</Title>
                        <Text center>
                            Relax and enjoy!
                        </Text>
                        <Dots amount={3} current={3}/>
                    </View>
                </ThemeProvider>
            </ScrollView>
        </GestureRecognizer>
    )
}

export default OnBoarding2