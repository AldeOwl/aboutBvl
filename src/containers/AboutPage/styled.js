import styled from 'styled-components';

export const Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
export const Title = styled.h2`
    font-size: 50px;
    color: #ffffff;
    margin: 50px;
`;

export const PresidentMessage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: justify;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 8px;
  & * {
    width: 100% !important;
  }
  @media screen and (max-width: 780px) {
    text-align: start;
  }
`;
