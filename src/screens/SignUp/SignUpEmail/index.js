import React, { useState } from 'react'
import { ScrollView, View, KeyboardAvoidingView } from 'react-native'
import MessageModal from '@components/MessageModal'
import { ThemeProvider } from 'styled-components'

import theme from '@styled/theme'
import { Title, Text, Input, Button, Link, GoogleButton } from '@styled/components'

import style from './style'

const SignUpEmail = props => {
    const [submitButton, setSubmitButton] = useState(false)
    const [emailInput,setEmailInput] = useState('')
    const [modalVisibility, setModalVisibility] = useState(false)

    const handleChangeEvent = (text) => {
        setEmailInput(text)
    }

    const handleSubmitEvent = () => {
        setSubmitButton(true)
        setTimeout(() => {            
            _validateEmailInput()
        }, 500)
    }

    const handleModalVisibility = () => {
        setModalVisibility(false)
    }

    /**
     * Validate email input
     * 
     * @return Void
     */
    const _validateEmailInput = () => {
        const onSucess = () => {
            console.log('hooray!')
            setSubmitButton(false)            
        }
        const onFail = () => { 
            setSubmitButton(false)
            setModalVisibility(true)
        }        
        if (! emailInput.includes('@')) return onFail()
        return onSucess()
    }    

    return(
        <ScrollView style={style.scrollView}>
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
                        <Input handleChangeEvent={handleChangeEvent} label="Email" />
                        <Button 
                            handlePressEvent={handleSubmitEvent} 
                            style={style.signUpBtn}
                            isDisabled={submitButton}
                            isLoading={submitButton}>Sign Up</Button>
                        <Link center bold secondary>Already have an account?</Link>
                        <MessageModal 
                            modalVisibility={modalVisibility} 
                            handleDismissEvent={handleModalVisibility} />
                    </View>
                </ThemeProvider>
            </KeyboardAvoidingView>            
        </ScrollView>
    )
}

export default SignUpEmail