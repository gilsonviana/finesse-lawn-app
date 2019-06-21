import { StyleSheet } from 'react-native'
import theme from '@styled/theme'

export default StyleSheet.create({
    scrollView: {
        flex: 1,        
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        marginLeft: theme.margin,
        marginRight: theme.margin,
        paddingTop: 80,
    },

    image: {
        width: 300,
        height: 250,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 80
    }
})