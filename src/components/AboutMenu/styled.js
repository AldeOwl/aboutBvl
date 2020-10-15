import styled from 'styled-components';


export const Wrap = styled.div`
    width: 100%;
    display: flex;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid rgb(27, 127, 204);
`;
export const MenuItem = styled.div`
    flex: 1;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.activeTab ? '#2751E8' : '#fff'};
    background-color: ${props => props.activeTab ? '#fff' : '#2751E8'};
    font-family: 'Bebas', sans-serif;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
        background-color: #fff;
        color: #2751E8;
        }
    &.active {
        background-color: #fff;
        color: #2751E8;
    }
    @media screen and (max-width: 600px) {
        font-size: 14px;
    }
    @media screen and (max-width: 400px) {
        font-size: 12px;
    }
`;
