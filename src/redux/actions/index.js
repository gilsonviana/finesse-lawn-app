import * as types from './types'

/**
 * Sing up the user by email
 * 
 * @param {String} email 
 * @param {Function} onSucess 
 * @param {Function} onFail 
 */
export const signUpByEmail = (email, onSucess, onFail) => {
    let errorMessage = ''

    if (! email.includes('@')) {
        errorMessage = 'Please insert a valid email address.'
        return onFail(errorMessage)
    }    

    onSucess()

    return {
        type: types.SIGN_UP,
        payload: email
    }
}

/**
 * Finish the sign up process by adding aditional info 
 * 
 * @param {*} email 
 * @param {*} form 
 * @param {*} onSucess 
 * @param {*} onFail 
 */
export const finishSignUp = (email, form, onSucess, onFail) => {
    const formFields = Object.entries(form)
    let errorMessage = ''    

    for (let [key, value] of formFields) {
        console.log(key, value)
        if (value === '') {
            errorMessage = `Field cannot be empty`
        }

        if (key == 'password' && value.length < 6) {
            errorMessage = `Password should be at least 6 characters long.`
        }
        console.log(errorMessage)        
    }

    if (errorMessage.length > 0) {
        return onFail(errorMessage)
    }

    onSucess()

    return {
        type: types.FINISH_SIGN_UP,
        payload: form
    }
}