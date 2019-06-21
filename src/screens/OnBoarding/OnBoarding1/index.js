import React from 'react'
import { ScrollView, View, Image } from 'react-native'
import { ThemeProvider } from 'styled-components'

import styles from './style'
import theme from '@styled/theme'
import { Title, Text } from '@styled/components'

const OnBoarding1 = props => (
    <ScrollView style={styles.scrollView}>
        <ThemeProvider theme={theme}>
            <View style={styles.container}>
                <Image source={require('@assets/images/woman-notebook.png')} style={styles.image} resizeMode="contain" />
                <Title center>Create a project</Title>
                <Text center>
                    Describe your needs for the project you want. Cause every 
                    client is unique.
                </Text>
            </View>
        </ThemeProvider>
    </ScrollView>
)

export default OnBoarding1