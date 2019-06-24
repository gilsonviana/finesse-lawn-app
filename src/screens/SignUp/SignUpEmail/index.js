import React, { useState } from 'react'
import { ScrollView, View, KeyboardAvoidingView, TouchableNativeFeedback } from 'react-native'
import { ThemeProvider } from 'styled-components'

import theme from '@styled/theme'
import { Title, Text, Input, Button, Link, GoogleButton } from '@styled/components'

import style from './style'

const SignUpEmail = props => {
    const [emailInput,setEmailInput] = useState()

    const handleChangeEvent = (text) => {
        setEmailInput(text)
    }

    const handleSubmitEvent = () => {
        console.log(emailInput)
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
                        <Button handlePressEvent={handleSubmitEvent} style={style.signUpBtn}>Sign Up</Button>
                        <Link center bold secondary>Already have an account?</Link>
                    </View>
                </ThemeProvider>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default SignUpEmail