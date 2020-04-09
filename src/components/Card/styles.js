import styled from 'styled-components';

export const Container = styled.div`
    padding: 10px;
    margin: 0 20px 20px 20px;
    background-color: #FFF;
    border: 1px solid #bbb;
    border-radius: 7px;
    box-shadow: 1px 1px 4px rgba(3, 3, 3, 0.3);
    border-bottom: 8px solid ${props=>props.color};

@media only screen and (max-width: 650px){
        width: 90%;
}
`;

export const Title = styled.p`
    padding: 3px;
    font-size: 0.7rem;
    color: #666;
`;

export const Value = styled.p`
    padding: 3px;
    font-size: 1rem;
    color: #000;
    font-weight: 400;
`;

export const Date = styled.p`
    padding: 3px;
    font-size: 0.7rem;
    color: #666;
    font-weight: 400;
`;

export const Description = styled.p`
    padding: 3px;
    font-size: 0.7rem;
    color: #333;
    font-weight: 600;
`;

export const Static = styled.p`
    padding: 3px;
    font-size: 0.8rem;
    color: #333;
    font-weight: 500;
    text-transform: uppercase;
`;



