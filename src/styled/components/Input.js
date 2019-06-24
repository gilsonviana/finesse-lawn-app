import React, { useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'

const Container = styled.View`
    align-items: center;
    background-color: ${({theme}) => theme.colorWhite};
    border-color: ${({theme}) => theme.colorGrey};
    border-style: solid;
    border-width: 1;    
    flex-direction: row;
    justify-content: space-between;    
    padding-left: 10;
    padding-right: 10;
    padding-top: ${({theme}) =>  theme.fontSize};
    padding-bottom: ${({theme}) =>  theme.fontSize};   
    overflow: hidden;   
    shadow-color: ${({theme}) => theme.colorGrey};
    shadow-offset: 0px 1px;
    shadow-opacity: 0.22;
    shadow-radius: 10;
    elevation: 4;
`

const Label = styled.Text`    
    color: ${({theme}) => theme.colorSecondary};
    flex: 1;
    font-size: ${({theme}) => theme.fontSize};
    font-family: GillSans-Heavy;
`

const TextInput = styled.TextInput`
    text-align: right;
    flex: 2;
`

const Input = props => {
    const [isActive, setIsActive] = useState(false)    

    /**
     * Handle the active state
     */
    const handleOnPress = () => {
        setIsActive(! isActive)         
        input.focus()       
    }

    return(
        <TouchableWithoutFeedback onPress={() => handleOnPress()}>
            <Container {...props}>
                <Label>{props.label}</Label>
                <TextInput ref={(node) => input = node} onChangeText={(text) => props.handleChangeEvent(text)}/>
            </Container>
        </TouchableWithoutFeedback>
    )
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    handleChangeEvent: PropTypes.func.isRequired
}

export default Input