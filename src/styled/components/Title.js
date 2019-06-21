import styled from 'styled-components/native'

const Title = styled.Text`
    font-size: ${({theme, display, large}) => (display) ? theme.fontSizeDisplay : (large) ? theme.fontSizeLarge : theme.fontSizeMedium};
    color: ${({theme, white, dark}) => (dark) ?  theme.colorDark: (white) ? theme.colorWhite : theme.colorSecondary};
    text-align: ${({center}) => (center) ? 'center' : 'left'};
`

export default Title