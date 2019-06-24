import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.View`
    flex: 1;    
`
const Text = styled.Text`
    color: ${({theme, secondary}) => (secondary) ? theme.colorSecondary : theme.colorDark};
    font-size: ${({theme, large}) => (large) ? theme.fontSizeDisplay : theme.fontSize};
    font-family: ${({theme, bold}) => (bold) ? theme.fontPrimaryBold : theme.fontPrimary};
    text-align: ${({center}) => (center) ? 'center' : 'left'};
    ${({uppercase}) => (uppercase) && 'text-transform: uppercase'};
`

const Link = props => {
    return(
        <TouchableWithoutFeedback>
            <Container>
                <Text {...props}>{props.children}</Text>
            </Container>
        </TouchableWithoutFeedback>
    )
}

Link.propTypes = {
    children: PropTypes.string.isRequired
}

export default Link