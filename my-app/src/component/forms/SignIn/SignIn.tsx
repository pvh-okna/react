import React, {useState} from 'react';
import Title from "../../title/Title";
import MyInput from "../MyInput/MyInput";
import {Block} from "./style";
import {useDispatch} from "react-redux";

const SignIn = () => {
    const [value, setValue] = useState({
        email: '',
        password: ''
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

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      console.log(value)

    }


    return (
        <Block>
            <Title children={"Sign In"}/>
            <form onSubmit={handleSubmit}>
                <MyInput
                    type={"text"}
                    placeholder={"Your email"}
                    name="email"
                    value= {value.email}
                    label={"Email"}
                    onChange={handleChange}
                />
                <MyInput
                    type={"password"}
                    placeholder={"Your password"}
                    name="password"
                    value= {value.password}
                    label={"Password"}
                    onChange={handleChange}
                />
                <button type={"submit"}>Submit</button>
            </form>

        </Block>
    );
};

export {SignIn};