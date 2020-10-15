import styled from 'styled-components';


export const Icon = styled.a`
  max-width: 30px;
  display: flex;
  align-items: center;
  margin: 0 20px 10px 0;
  text-align: center;
  color: #fff;
  text-decoration: none;
  img {
    width: 100%;
  }
  @media screen and (max-width: 680px) {
    max-width: 20px;
    margin: 0;
  }
`;

export const MainIcon = styled.a`
  max-width: 140px;
  display: flex;
  align-items: center;
  margin: 0 20px 10px 0;
  text-align: center;
  color: #fff;
  text-decoration: none;
  img {
    width: 100%;
  }
  @media screen and (max-width: 680px) {
    max-width: 100px;
    margin: 0;
  }
`;

export const LinksRow = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 680px) {
    justify-content: space-around;
  }
`;
