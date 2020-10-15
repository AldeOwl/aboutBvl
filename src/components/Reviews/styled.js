import styled from 'styled-components';


export const Wrap = styled.div`
    width: 100%;
    margin: 20px 0 0 0;
`;

export const Container = styled.div`
    margin: 10px 0;
    padding: 25px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 8px;
`;
export const Title = styled.h1`
    width: 100%;
    margin: 10px 0;
    font-size: 30px;
    @media screen and (max-width: 500px) {
        font-size: 20px;
    }
`;
export const SubTitle = styled.h3`

`;
export const PhotoWrap = styled.div`
    margin-right: 20px;
    img {
        width: 150px;
        height: 200px;
    }
`;
export const Wrapper = styled.div`
    display: flex;
`;
export const TitleWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  
  img {
    width: 60px;
    height: 40px;
  }
  a {
      align-self: flex-end;
      color: #2751E8;
      @media screen and (max-width: 500px) {
        display: none;
    }
  }
   p {
      @media screen and (max-width: 500px) {
        display: none;
    }
  }
    
`;

export const TextWrap = styled.div`
    display: none;
    flex-direction: column;
    
    a {
        align-self: flex-end;
        color: #2751E8;
    }
     @media screen and (max-width: 500px) {
          display: flex;
      }
`;
