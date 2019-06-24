/**
 * Custom bottom navigation component
 */
import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { ThemeProvider } from 'styled-components'

import theme from '@styled/theme'
import { Text } from '@styled/components'

const OnBoardingBottomTab = props => (
    <ThemeProvider theme={theme}>
        <View style={styles.container}>
            <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
                <Text secondary uppercase bold style={styles.buttonTitle}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text secondary uppercase bold style={styles.buttonTitle}>Sign In</Text>
            </TouchableOpacity>
        </View>
    </ThemeProvider>
)

const styles = StyleSheet.create({
    container: {        
        justifyContent: 'space-between',
        alignItems: 'center',  
        flexDirection: 'row',
        backgroundColor: theme.colorPrimary,
        paddingLeft: theme.margin,
        paddingRight: theme.margin,        
    },
    buttonTitle: {
        paddingVertical: theme.margin / 2,        
    }
})

export default OnBoardingBottomTab