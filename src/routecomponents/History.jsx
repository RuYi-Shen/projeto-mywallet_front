import styled from 'styled-components';

export default function History() {
    return (
        <Main>
            <header>
                <h2>Olá, Fulano</h2>
                <h3>Histórico</h3>
            </header>
            <div className="history">Não há registros de entrada ou saída</div>
            <Buttons>
                <button>Nova entrada</button>
                <button>Nova saída</button>
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
    }


    div.history {
        max-width: 430px;
        height: calc(100vh - 31px - 80px - 114px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 15px 0;
        background-color: var(--white-base);

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
    
    button {
        max-width: 156px;
        height: 114px;
        border: none;
        background-color: var(--purple-button);
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        
        color: var(--white-base);

        &:hover {
            cursor: pointer;
        }
    }
`