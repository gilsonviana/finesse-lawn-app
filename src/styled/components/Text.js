import styled from 'styled-components/native'

const Text = styled.Text`
    font-size: ${({theme}) => theme.fontSize};
    color: ${({theme, secondary, white}) => (secondary) ? theme.colorSecondary : (white) ? theme.colorWhite : theme.colorDark};
    text-align: ${({center}) => (center) ? 'center' : 'left'};
    font-family: 'GillSans-Medium';
`

export default Text