/**
 * Custom bottom navigation component
 */
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import theme from '@styled/theme'

const OnBoardingBottomTab = props => (
    <View style={styles.container}>
        <TouchableOpacity>
            <Text style={styles.buttonTitle}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.buttonTitle}>Sign In</Text>
        </TouchableOpacity>
    </View>
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
        textTransform: 'uppercase',
        paddingVertical: theme.margin / 2,        
    }
})

export default OnBoardingBottomTab