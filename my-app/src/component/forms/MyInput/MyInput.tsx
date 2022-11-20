import React from 'react';
import { InputWrapper } from './style';

type InputProps = {
    type: string,
    placeholder: string,
    name: string,
    value: string,
    label: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void

}

const MyInput = (props:InputProps) => {
    return (
        <InputWrapper>
            <input
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                name={props.name}
                onChange={props.onChange}
            />
        </InputWrapper>

    );
};

export default MyInput;