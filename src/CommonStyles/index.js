import styled from 'styled-components';

export const Title = styled.div`
  width: 100%;
  height: 40px;
  color: ${props => props.theme.title};
  background-color: ${props => props.theme.main};
  font-family: 'Bebas', sans-serif;
  font-size: ${props => (props.fontSize ? props.fontSize : 'normal')};
  text-align: center;
  text-transform: uppercase;
  line-height: 40px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border: 1px solid rgb(27, 127, 204);
  border-bottom: none;
  box-sizing: border-box;
`;

export const SubTitle = styled.div`
  width: 95%;
  height: 60px;
  font-size: 25px;
  line-height: 60px;
  text-align: center;
  color: #2751e8;
  text-transform: uppercase;
  border-bottom: 1px solid #2751e8;

  @media (max-width: 600px) {
    height: 50px;
    font-size: 20px;
    line-height: 50px;
  }
`;
