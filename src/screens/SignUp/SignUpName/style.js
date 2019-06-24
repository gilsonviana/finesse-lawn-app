import { StyleSheet } from 'react-native'
import theme from '@styled/theme'

const style = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: theme.colorWhite
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        marginLeft: theme.margin,
        marginRight: theme.margin,
        paddingTop: 120,
    },
    title: {
        marginBottom: theme.fontSize * 2
    },
    lead: {
        marginBottom: theme.fontSize * 2
    },
    inputMargin: {
        marginVertical: theme.fontSize
    },
    continueBtn: {
        marginTop: theme.fontSize * 2,
        marginBottom: theme.fontSize * 2,
    }
})

export default style