import styled from 'styled-components';

export const Menu = styled.nav`
  width: 100%;
  margin: 0 auto;
`;

export const SocialLinks = styled.div`
  width: 100%;
  display: none;
  order: 2;
  border: none;
  @media screen and (max-width: 680px) {
    max-height: ${props => (props.active ? '40px' : '0')};
    display: flex;
    justify-content: space-around;
    margin-bottom: ${props => (props.active ? '10px' : '0')};
    transition: all 0.3s ease-out 0.2s;
  }
`;

export const MobileMenu = styled.div`
  order: 2;
  display: none;
  width: 40px;
  height: 40px;
  position: relative;
  top: 12px;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  @media screen and (max-width: 680px) {
    display: block;
  }
`;


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
