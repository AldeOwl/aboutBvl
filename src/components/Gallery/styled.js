import styled from 'styled-components';
import loader from '../../images/loader.svg'

export const Wrap = styled.div`
  width: 100%;
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
  grid-gap: 5px;
  grid-auto-rows: 500px;
  overflow: hidden;
  @media screen and (max-width: 700px) {
    //grid-template-columns: repeat(3, 1fr);
    //grid-auto-rows: 300px;
  }
`;

export const ImgContainer = styled.div`
  overflow: hidden;
  cursor: pointer;
  background: url(${loader}) no-repeat;
  background-position: 50% 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: .3s all ease-in-out;
    opacity: 0;
    &:hover {
      width: 105%;
      height: 105%;
    }
  }
`;


