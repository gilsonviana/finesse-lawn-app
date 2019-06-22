import React from 'react'
import { ScrollView, View, Image } from 'react-native'
import { ThemeProvider } from 'styled-components'
import GestureRecognizer from 'react-native-swipe-gestures'

import Dots from '../../../components/Dots'

import styles from './style'
import theme from '@styled/theme'
import { Title, Text } from '@styled/components'



const OnBoarding1 = props => {
    const handleSwipeLeft = () => props.navigation.navigate('OnBoarding2')        

    return (
        <GestureRecognizer
            onSwipeLeft={() => handleSwipeLeft()}
            config={{
                velocityThreshold: 0.3,
                directionalOffsetThreshold: 80
            }}
            style={{ flex: 1 }}>
            <ScrollView style={styles.scrollView}>
                <ThemeProvider theme={theme}>
                    <View style={styles.container}>
                        <Image source={require('@assets/images/woman-notebook.png')} style={styles.image} resizeMode="contain" />
                        <Title center style={styles.title}>Create a project</Title>
                        <Text center>
                            Describe your needs for the project you want. Cause every 
                            client is unique.
                        </Text>
                        <Dots amount={3} current={1}/>
                    </View>
                </ThemeProvider>
            </ScrollView>
        </GestureRecognizer>
    )
}

export default OnBoarding1