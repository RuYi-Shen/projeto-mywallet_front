import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import axios from 'axios';

import Record from '../components/Record';

import icon_plus from '../assets/icon_plus.png';
import icon_minus from '../assets/icon_minus.png';
import icon_logout from '../assets/icon_logout.png';

export default function History() {
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem('userData'));

    const [records, setRecords] = useState([]);
    const [balance, setBalance] = useState(0);
    const [balanceSign, setBalanceSign] = useState(1);

    const URL = "http://localhost:5000/history";
    const logout_URL = "http://localhost:5000/log-out";


    function logout() {
        const confirm = window.confirm("Deseja realmente sair?");
        if (confirm) {
            localStorage.clear();
            navigate("/");

            axios.post(logout_URL, userData, { headers: { Authorization: `Bearer ${userData.token}` } })
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }

    useEffect(() => {
        if (userData) {
            axios.get(URL, { headers: { Authorization: `Bearer ${userData.token}` } })
                .then((response) => {
                    setRecords(response.data);
                }
                )
                .catch(error => {
                    console.log(error);
                }
                );
        }
        else {
            navigate("/");
        }// eslint-disable-next-line
    }, [navigate]);

    useEffect(() => {
        if (records) {
            let total = 0;
            records.forEach(record => {
                total += record.value * 1;
            })
            setBalanceSign(Math.sign(total));
            setBalance(Math.abs(total));
        }
    }, [records]);

    return (
        <Main>
            <header>
                <h2>Olá, {userData?.username}</h2>
                <img src={icon_logout} alt="logout icon" onClick={logout} />
            </header>
            <div className="history">{
                records?.length > 0 ? records.map((record) => {
                    return (
                        <Record key={record._id} record={record} />
                    )
                })
                    : <span className="null">Não há registros de entrada ou saída</span>
            }
            </div>
            <Buttons sign={balanceSign}>
                {
                    records?.length > 0 ?
                        <div className="balance"><p>Saldo</p> <span>{balance.toFixed(2)}</span></div> : null
                }
                <button><Link to="/record?type=income"><img src={icon_plus} alt="plus icon" /><div>Nova entrada</div></Link></button>
                <button><Link to="/record?type=outlay"><img src={icon_minus} alt="minus icon" /><div>Nova saída</div></Link></button>
            </Buttons>
        </Main>
    );
}


/**************************** css ****************************/

const Main = styled.main`
    min-height: 100vh;
    padding: 25px;
    background-color: var(--background);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;

    header {
        max-width: 430px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        img {
            width: 24px;
            height: 24px;

            &:hover {
                cursor: pointer;
            }
        }
    }


    div.history {
        max-width: 430px;
        width: 100%;
        height: calc(100vh - 31px - 80px - 114px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        margin: 15px 0;
        padding: 12px;
        border-radius: 5px;
        background-color: var(--white-base);
        overflow: auto;

        span.null {
            height: 100%;
            max-width: 185px;
            font-size: 20px;
            line-height: 23px;
            display: flex;
            align-items: center;
            text-align: center;

            color: #868686;
        }
        
    }

    h2 {
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;

        color: var(--white-base);
    }
`
const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 430px;
    width: 100%;
    position: relative;
    
    div.balance {
            position: absolute;
            top: -45px;
            left: 0px;
            font-weight: 700;
            font-size: 17px;
            line-height: 20px;
            height: 30px;
            max-width: 430px;
            border: 10px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 15px;
            align-items: center;
            background-color: rgba(255, 255, 255, 0.7);
            border-radius: 5px;
            color: var(--black-base);

            span {
                font-size: 17px;
                line-height: 20px;
                text-align: right;

                color: ${props => props.sign === -1 ? 'var(--red-negative)' : 'var(--green-positive)'};
            }
    }

    button {
        width: 47%;
        height: 114px;
        border: none;
        padding: 10px;
        background-color: var(--purple-button);
        border-radius: 5px;
        
        
        color: var(--white-base);

        a {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: start;
            
            
            img {
                width: 22px;
                height: 22px;
            }
    
    
            div {
                text-align: left;
                max-width: 64px;
                font-weight: 700;
                font-size: 17px;
                line-height: 20px;
            }
        }

    }
`