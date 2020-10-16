import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 50px;
  color: #ffffff;
  margin: 50px;
`;

export const NewsWrap = styled.div`
  width: 600px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;


export const NewsDetail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: justify;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 8px;
  & img[style] {
    width: 100% !important;
    height: 100% !important;
  }
  & * {
    width: 100% !important;
  }
  @media screen and (max-width: 780px) {
    text-align: start;
  }
`;
