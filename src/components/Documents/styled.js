import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 50px;
  color: #ffffff;
  margin: 50px;
`;

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const List = styled.div`
  width: 100%;
  margin: 15px;
  display: flex;
  flex-direction: column;
`;

export const Document = styled.a`
  width: fit-content;
  display: flex;
  align-items: center;
  margin: 30px 0 0 0;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  
  @media (max-width: 600px){
    font-size: 16px;
  }
  
  p {
    margin: 0;
  }
  
  img {
    width: 35px;
    margin-right: 5px;
    align-self: flex-start;
  }
  
  span {
     position: absolute;
     top: -20px;
     left: 5px;
     color: #f7aa41;
     font-size: 14px;
  }
`;