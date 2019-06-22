import React from 'react'
import { ScrollView, View, Image } from 'react-native'
import { ThemeProvider } from 'styled-components'

import styles from './style'
import theme from '@styled/theme'
import { Title, Text } from '@styled/components'

const OnBoarding2 = props => (
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
            </View>
        </ThemeProvider>
    </ScrollView>
)

export default OnBoarding2