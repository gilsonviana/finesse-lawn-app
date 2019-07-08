import React, { useState } from 'react'
import { ScrollView, View, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import MessageModal from '@components/MessageModal'
import { ThemeProvider } from 'styled-components'

import { signUpByEmail } from '@redux/actions'
import theme from '@styled/theme'
import { Title, Text, Input, Button, Link, GoogleButton } from '@styled/components'

import style from './style'

const SignUpEmail = props => {
    const [submitButton, setSubmitButton] = useState(false)
    const [emailInput,setEmailInput] = useState('')
    const [modalVisibility, setModalVisibility] = useState(false)
    const [modalMessage, setModalMessage] = useState('')

    /**
     * Update the state
     * 
     * @param {String} text 
     */
    const handleChangeEvent = (text) => {
        setEmailInput(text)
    }

    /**
     * Submit user email
     */
    const handleSubmitEvent = () => {
        setSubmitButton(true)
        props.signUpByEmail(emailInput, _submitOnSucess, _submiOnFail)
    }

    const _submitOnSucess = () => {
        setSubmitButton(false)
        props.navigation.navigate('SignUpName', {
            email: emailInput
        })
    }

    const _submiOnFail = (error) => {
        setSubmitButton(false)
        setModalMessage(error)
        setModalVisibility(true)
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
                        <GoogleButton style={style.googleBtn}/>
                        <Text center style={style.helpText}>Or continue with email</Text>
                        <Input 
                            handleChangeEvent={handleChangeEvent} 
                            label="Email"
                            autoCapitalize={true} />
                        <Button 
                            handlePressEvent={handleSubmitEvent} 
                            style={style.signUpBtn}
                            isDisabled={submitButton}
                            isLoading={submitButton}>Sign Up</Button>
                        <Link center bold secondary>Already have an account?</Link>                        
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
        signUpByEmail
    }
}

export default connect(null, mapDispatchToProps)(SignUpEmail)