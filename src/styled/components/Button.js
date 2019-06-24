import React from 'react'
import { TouchableWithoutFeedback, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

const Container = styled.View`
    background-color: ${({theme}) => theme.colorPrimary};
    justify-content: center;
    align-items: center;
    padding-top: ${({theme}) => theme.fontSize};
    padding-bottom: ${({theme}) => theme.fontSize};
    border-radius: 165;
    overflow: hidden;   
    shadow-color: ${({theme}) => theme.colorGrey};
    shadow-offset: 0px 1px;
    shadow-opacity: 0.22;
    shadow-radius: 10;
    elevation: 2;
`

const Label = styled.Text`
    color: ${({theme}) => theme.colorSecondary};
    font-family: ${({theme}) => theme.fontPrimaryBold};
    font-size: ${({theme}) => theme.fontSize}
`

const Button = props => {
    return(
        <TouchableWithoutFeedback onPress={() => props.handlePressEvent()} disabled={props.isDisabled}>
            <Container {...props}>
                { (props.isLoading) ?
                    <ActivityIndicator size="small" color="#000"/> : 
                    <Label>{props.children}</Label>
                }                
            </Container>
        </TouchableWithoutFeedback>
    )
}

Button.propTypes = {
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    children: PropTypes.string.isRequired,
    handlePressEvent: PropTypes.func.isRequired
}

Button.defaultProps = {
    isDisabled: false,
    isLoading: false,
}

export default Button