import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import { ThemeProvider } from 'styled-components'

import theme from '@styled/theme'
import { Text, Button } from '@styled/components'

const MessageModal = props => {
    return(
        <Modal style={styles.modal} isVisible={props.modalVisibility}>
            <ThemeProvider theme={theme}>
                <View>
                    <Text>FAIL</Text>
                    <Button handlePressEvent={() => props.handleDismissEvent()}>Close</Button>
                </View>
            </ThemeProvider>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        paddingTop: theme.fontSize * 4,
        paddingBottom: theme.fontSize,
        paddingHorizontal: theme.fontSize * 2,
        backgroundColor: theme.colorWhite,
        borderRadius: theme.fontSize
    }
})

MessageModal.propTypes = {
    modalVisibility: PropTypes.bool.isRequired,
    handleDismissEvent: PropTypes.func.isRequired
}

export default MessageModal