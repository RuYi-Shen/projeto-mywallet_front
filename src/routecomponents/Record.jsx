import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";

import styled from 'styled-components';
import axios from 'axios';

import RecordForm from '../components/RecordForm';

export default function Record() {
    const URL = "http://localhost:5000/history";
    const userData = JSON.parse(localStorage.getItem('userData'));

    const navigate = useNavigate();
    const [recordInfo, setRecordInfo] = useState({});
    const [disabled, setDisabled] = useState(false);

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    const query = useQuery();
    const type = query.get("type");

    useEffect(() => {
        if (!userData) {
            navigate("/");
        }
    }, [userData, navigate]);

    useEffect(() => {
        if (Object.keys(recordInfo).length !== 0) {
            setDisabled(true);
            axios.post(URL, recordInfo, { headers: { Authorization: `Bearer ${userData.token}` } })
                .then((response) => {
                    console.log(response);
                    alert(response.statusText);
                    navigate("/history");
                })
                .catch(error => {
                    console.log(error);
                    alert(error.response.data);
                    setDisabled(false);
                });
        }
    }, [recordInfo, userData.token, navigate]);


    return (
        <Main>
            <div><h2>Nova {type === "income" ? "entrada" : "saída"}</h2></div>
            <RecordForm type={type} setRecordInfo={setRecordInfo} disabled={disabled} />
        </Main>
    )
}


/**************************** css ****************************/

const Main = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: flex-start;
    padding: 25px;
    background-color: var(--purple-base);

    div {
        max-width: 430px;
        width: 100%;
        text-align: left;
        margin-bottom: 40px;

        h2 {
            
            font-weight: 700;
            font-size: 26px;
            line-height: 31px;
    
            color: var(--white-base);
        }
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