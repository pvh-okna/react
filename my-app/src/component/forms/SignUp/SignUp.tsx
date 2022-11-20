import React, {useState} from 'react';
import Title from "../../title/Title";
import MyInput from "../MyInput/MyInput";
import {useDispatch} from "react-redux";
import {signUpRequest} from "../../../store/authReducer/action";

const SignUp = () => {
    const [value, setValue] = useState({
        username: '',
        email: '',
        password: '',
        // passwordConfirm: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue((props) => {
            return (
                {
                    ...props,
                    [e.target.name]: e.target.value,
                })
        })
    }

    const dispatch = useDispatch();
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        dispatch(signUpRequest(value))
    }
    return (
        <>
            <Title children={"Sign Up"}/>
            <form onSubmit={handleSubmit}>

                <MyInput
                    label={'Name'}
                    type={'text'}
                    name={'username'}
                    placeholder={'Your name'}
                    value={value.username}
                    onChange={handleChange}
                />
                <MyInput
                    label={'Email'}
                    type={'text'}
                    name={'email'}
                    placeholder={'Your email'}
                    value={value.email}
                    onChange={handleChange}
                />
                <MyInput
                    label={'Password'}
                    type={'password'}
                    name={'password'}
                    placeholder={'Your password'}
                    value={value.password}
                    onChange={handleChange}
                />
                <button type={"submit"}>Submit</button>
            </form>

        </>
    );
};

export {SignUp};