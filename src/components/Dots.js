/**
 * Display dots for on boarding process
 */
import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import theme from '@styled/theme'

const Dots = props => {
    const { amount, current } = props

    const renderDots = () => {
        let Dots = []

        for (let i = 1; i <= amount; i++) {                        
            if (i === current) {
                Dots.push(<View key={i} style={[styles.dots, styles.dotActivated]}></View>)
            } else {
                Dots.push(<View key={i} style={styles.dots}></View>)
            }
        }
        
        return Dots
    }

    return (
        <View style={styles.dotsContainer}>
            { renderDots() }
        </View>
    )
}

Dots.propTypes = {
    amount: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired
}

Dots.defaultProps = {
    amount: 3,
    current: 1
}

const styles = StyleSheet.create({
    dotsContainer: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: theme.fontSize * 2
    }, 
    dots: {
        width: 10,
        height: 10,
        backgroundColor: 'rgba(112, 112, 112, .5)',
        marginRight: 8,
        borderRadius: 4
    },
    dotActivated: {
        backgroundColor: 'rgba(112, 112, 112, 1)'
    }
})

export default Dots