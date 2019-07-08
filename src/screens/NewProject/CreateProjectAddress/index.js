import React from 'react'
import { View } from 'react-native'
import { ThemeProvider } from 'styled-components'

import theme from '@styled/theme'
import { Text } from '@styled/components'

const CreateProjectAddress = props => {
    return (
        <ScrollView enabled>
            <ThemeProvider theme={theme}>
                <View>
                    <Text>Hello</Text>
                </View>
            </ThemeProvider>
        </ScrollView>
    )
}

export default CreateProjectAddress