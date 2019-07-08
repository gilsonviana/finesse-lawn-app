import React, { useState } from 'react'
import { ScrollView, View, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import MessageModal from '@components/MessageModal'
import { ThemeProvider } from 'styled-components'

import { finishSignUp } from '@redux/actions'
import theme from '@styled/theme'
import { Title, Text, Input, Button, Link } from '@styled/components'

import style from './style'

const SignUpEmail = props => {
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        password: ''
    })
    const [submitButton, setSubmitButton] = useState(false)    
    const [modalVisibility, setModalVisibility] = useState(false)
    const [modalMessage, setModalMessage] = useState('')

    /**
     * Update the state
     * 
     * @param {String} text user typed value
     * @param {String} field reference for form  
     */
    const handleChangeEvent = (text, field) => {
        setFormValues({
            ...formValues,
            [field]: text
        })
    }

    /**
     * Submit form
     */
    const handleSubmitEvent = () => {
        const userEmail = props.navigation.getParam('email')
        setSubmitButton(true)        
        props.finishSignUp(userEmail, formValues, _submitOnSucess, _submiOnFail)
    }

    const _submitOnSucess = () => {
        setSubmitButton(false) // TODO change to navigate
        console.log('sucess')
    }

    const _submiOnFail = (error) => {
        setSubmitButton(false)
        setModalMessage(error)
        setModalVisibility(true)
        console.log('fail')
    }

    /**
     * Toggle modal
     */
    const handleModalVisibility = () => {
        setModalVisibility(false)
    }

    return(
        <ScrollView style={style.scrollView} keyboardShouldPersistTaps="always">
            <KeyboardAvoidingView behavior="position" enabled>
                <ThemeProvider theme={theme}>
                    <View style={style.container}>
                        <Title display style={style.title}>Finesse Lawn</Title>
                        <Text style={style.lead}>
                            Create your profile and have
                            contractors at your fingertips
                        </Text>                                                
                        <Input 
                            handleChangeEvent={handleChangeEvent} 
                            name="firstName"
                            label="First name"
                            autoCapitalize={true} />
                        <Input 
                            style={style.inputMargin}
                            handleChangeEvent={handleChangeEvent} 
                            name="lastName"
                            label="Last name"
                            autoCapitalize={true} />
                        <Input 
                            handleChangeEvent={handleChangeEvent} 
                            name="password"
                            label="Password"
                            autoCapitalize={true}
                            secureTextEntry={true} />
                        <Button 
                            handlePressEvent={handleSubmitEvent} 
                            style={style.continueBtn}
                            isDisabled={submitButton}
                            isLoading={submitButton}>Continue</Button>                                              
                    </View>
                </ThemeProvider>
            </KeyboardAvoidingView>            
            <MessageModal 
                message={modalMessage}
                modalVisibility={modalVisibility} 
                handleDismissEvent={handleModalVisibility} />
        </ScrollView>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        finishSignUp
    }
}

export default connect(null, mapDispatchToProps)(SignUpEmail)