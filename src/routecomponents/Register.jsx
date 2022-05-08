import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import Form from '../components/Form';
import axios from 'axios';

let setUserInfo = "";
let disabled = false;

export default function Register() {
    /* const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({});
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if(Object.keys(userInfo).length !== 0){
            setDisabled(true);
            axios.post(URL, userInfo)
            .then((response) => {
                navigate("/");
            })
            .catch(error => {
                console.log(error);
                if(error.response.status === 409){
                    alert("Usuário já cadastrado!");
                }
                else alert("Erro ao cadastrar usuário!");
                setDisabled(false);
            });
        }
    }, [userInfo, navigate]);
 */
    return (
        <Main>
            <h1>MyWallet</h1>
            <Form type="register" setUserInfo={setUserInfo} disabled={disabled}/>
            <Link to="/">Já tem uma conta? Entre agora!</Link>
        </Main>
    )
}


/**************************** css ****************************/

const Main = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: auto 24px;
    background-color: var(--purple-base);

    h1 {
        font-family: 'Saira Stencil One';
        font-size: 32px;

        color: var(--white-base);
    }

    form {
        max-width: 430px;
    }

    a {
        font-weight: 700;
        font-size: 15px;

        color: var(--white-base);
    }
`