import styled from 'styled-components';

export const Foot = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2% 0 0 0;
  border-radius: 8px;
  overflow: hidden;
  @media (max-width: 680px) {
    padding-bottom: 80px;
  }
`;

export const SectionWrap = styled.div`
  width: 100%;
  background-color: lightgrey;
`;

export const OldSite = styled.a`
  width: 100%;
  padding: 5px 0;
  color: #000;
  text-align: center;
  font-weight: 500;
  background-color: lightgrey;
  text-decoration: none;
`;

export const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Empty = styled.div`
  height: 20px;
`;

export const Title = styled.p`
  margin: 10px;
  font-family: 'Bebas', sans-serif;
  font-size: 20px;
  text-align: center;
`;
export const Icon = styled.a`
  width: ${props => props.size ? '200px' : '75px'};
  max-height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  color: #000;
  text-align: center;

  @media screen and (max-width: 500px) {
    width: ${props => props.size ? '150px' : '60px'};
    margin: 10px;
  }
  
  img {
    width: 100%;
    height: auto;
  }
`;
