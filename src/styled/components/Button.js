import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

const Container = styled.View`
    background-color: ${({theme}) => theme.colorPrimary};
    justify-content: center;
    align-items: center;
    padding-top: ${({theme}) => theme.fontSize};
    padding-bottom: ${({theme}) => theme.fontSize};
    border-radius: 165;
`

const Label = styled.Text`
    color: ${({theme}) => theme.colorSecondary};
    font-family: ${({theme}) => theme.fontPrimaryBold};
    font-size: ${({theme}) => theme.fontSize}
`

const Button = props => {
    return(
        <TouchableWithoutFeedback onPress={() => props.handlePressEvent()}>
            <Container {...props}>
                <Label>{props.children}</Label>
            </Container>
        </TouchableWithoutFeedback>
    )
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    handlePressEvent: PropTypes.func.isRequired
}

export default Button