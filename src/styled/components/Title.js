import styled from 'styled-components/native'

const Title = styled.Text`
    font-size: ${({theme, display}) => (display) ? theme.fontSizeDisplay : theme.fontSize};
    color: ${({theme, white, dark}) => (dark) ?  theme.colorDark: (white) ? theme.colorWhite : theme.colorSecondary};
    text-align: ${({center}) => (center) ? 'center' : 'left'};
    font-family: 'GillSans-Heavy';
`

export default Title