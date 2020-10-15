import styled from 'styled-components';


export const Head = styled.div`
    max-width: 1400px;
    min-width: 320px;
    margin: 0 auto;
    padding: 3% 0;
    display: flex;
    align-items: center;
    @media screen and (max-width: 949px) {
        flex-direction: column;
        margin: 0;
    }
`;

export const Logo = styled.img`
    width: 200px;
    @media screen and (max-width: 850px) {
        width: 130px;
    }
`;

export const Title = styled.h1`
    margin: 0;
    padding-left: 50px;
    font-size: 7rem;
    text-align: center;
    color: #ffffff;
    @media screen and (max-width: 949px) {
        margin-top: 20px;
        padding-left: 0;

    }
    @media screen and (max-width: 850px) {
        font-size: 4rem;
    }
    @media screen and (max-width: 449px) {
        font-size: 2.75rem;
    }
`;