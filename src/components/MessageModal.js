import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import { ThemeProvider } from 'styled-components'

import theme from '@styled/theme'
import { Text, Button } from '@styled/components'

const MessageModal = props => {
    return(
        <View>
            <ThemeProvider theme={theme}>
                <Modal 
                    style={styles.modal} 
                    isVisible={props.modalVisibility}>                    
                    <View>
                        <Text style={styles.text}>{props.message}</Text>
                        <Button handlePressEvent={() => props.handleDismissEvent()}>Close</Button>
                    </View>
                </Modal>
            </ThemeProvider>
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {        
        paddingTop: theme.fontSize * 4,
        paddingBottom: theme.fontSize,
        paddingHorizontal: theme.fontSize * 2,
        backgroundColor: theme.colorWhite,
        borderRadius: theme.fontSize,
        flexDirection: 'column',        
    }, 
    text: {
        paddingBottom: theme.fontSize * 2,
    }
})

MessageModal.propTypes = {
    message: PropTypes.string.isRequired,
    modalVisibility: PropTypes.bool.isRequired,
    handleDismissEvent: PropTypes.func.isRequired
}

export default MessageModal