import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
    background-color: ${({theme}) => theme.colorGoogle};
    justify-content: center;
    align-items: center;
    padding-top: ${({theme}) => theme.fontSize};
    padding-bottom: ${({theme}) => theme.fontSize};
    border-radius: 165;
`

const Text = styled.Text`
    color: ${({theme}) => theme.colorWhite}
`

const GoogleButton = props => (
    <Container {...props}>
        <Text>Continue with Google</Text>
    </Container>
)

export default GoogleButton