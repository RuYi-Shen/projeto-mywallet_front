import styled from 'styled-components';

export default function Record(record) {
    const { date, description, value } = record.record;

    return (
        <RecordDiv sign={Math.sign(value)}>
            <div className="date">
                <span>{date}</span>
            </div>
            <div className="description">
                <span>{description}</span>
            </div>
            <div className="value">
                <span>{Math.abs(value).toFixed(2)}</span>
            </div>
        </RecordDiv>
    )
}


/**************************** css ****************************/

const RecordDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 30px;

    .date {
        width: 95px;
        height: 100%;
        display: flex;
        text-align: left;
        align-items: center;
        justify-content: flex-start;
        font-size: 16px;
        line-height: 19px;

        color: #C6C6C6;
    }
    .description {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        text-align: left;
        font-size: 16px;
        line-height: 19px;
        color: var(--black-base);
    }
    .value {
        width: 110px;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 16px;
        line-height: 19px;
        text-align: right;

        color: ${props => props.sign === -1 ? 'var(--red-negative)' : 'var(--green-positive)'};
    }
`