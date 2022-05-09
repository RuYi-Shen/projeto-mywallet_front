import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner'

import styled from 'styled-components';

export default function Form({ type, setRecordInfo, disabled }) {

    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');


    function handleSubmit(e) {
        e.preventDefault();
        console.log(type, value);
        setRecordInfo({ value, description });
    }

    return (
        <Forms onSubmit={handleSubmit} disabled={disabled}>
            <fieldset disabled={disabled}>
                {(type === "income") ?
                    <input type="number" id="value" placeholder="Valor" min="0" step="0.01" required value={value} onChange={e => setValue(e.target.value)} />
                    :
                    <input type="number" id="value" placeholder="Valor" max="0" step="0.01" required value={value} onChange={e => setValue(e.target.value)} />
                }
                <input type="text" id="description" placeholder="Descrição" required value={description} onChange={e => setDescription(e.target.value)} />

                <button type="submit">{disabled ? <ThreeDots color="var(--white-base)" height={40} width={80} /> : (type === "income" ? "Salvar entrada" : "Salvar saída")}</button>
            </fieldset>
        </Forms>
    )
}


/**************************** css ****************************/

const Forms = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    fieldset {
        

        input {
            width: 100%;
            height: 58px;
            box-sizing: border-box;
            border-radius: 5px;
            border: none;
            padding: 0 15px;
            margin-bottom: 13px;
            background-color: ${(props => props.disabled ? 'var(--white-base)' : 'var(--white-base)')};
            color: ${(props => props.disabled ? 'var(--black-base)' : 'var(--black-base)')};
            
            font-size: 20px;
            line-height: 23px;
        }

        button {
            width: 100%;
            height: 46px;
            border: none;
            background-color: var(--purple-button);
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 20px;
            line-height: 23px;

            color: var(--white-base);

            div {
                display: flex;
                align-items: center;
                justify-content: center;
                margin: auto;
            }

            &:hover {
                cursor: pointer;
            }
        }
    }

`
