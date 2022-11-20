import React from 'react';
import {SuccessForm, Text} from "./style";


const FormRegSuccess = () => {
    return (
        <SuccessForm>
            <Text>
                <p>Email confirmed.</p>
                <p>Your registration is now completed</p>
            </Text>
            <button>Go to home</button>
        </SuccessForm>
    );
};

export default FormRegSuccess;