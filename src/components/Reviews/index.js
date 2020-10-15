import React from 'react';
import {Wrap, Container, Title, PhotoWrap, TextWrap, TitleWrap, SubTitle, Wrapper} from './styled';


const Reviews = ({reviews}) => {
  return (
      <Wrap>
        {reviews &&
        reviews.map(item => {
          if (item.official !== 1) return <div/>;
          return (
              <Container key={item.id}>
                <Wrapper>
                  <PhotoWrap>
                    <img src={item.playerPhoto} alt={item.playerName}/>
                  </PhotoWrap>
                  <TitleWrap>
                    <img src={item.playerFlag} alt="Флаг"/>
                    <Title>{item.playerName}</Title>
                    <SubTitle>{item.playerPosition}</SubTitle>
                    <p>{item.text}</p>
                    <a href={item.srcUrl} target='_blank' rel="noopener noreferrer">Источник...</a>
                  </TitleWrap>
                </Wrapper>
                <TextWrap>
                  <p>{item.text}</p>
                  <a href={item.srcUrl} target='_blank' rel="noopener noreferrer">Источник...</a>
                </TextWrap>
              </Container>
          )
        })
        }
      </Wrap>
  );
};


export default Reviews;