import React from 'react';
import {
  NewsWrap,
  NewsDetail,
} from './styled';

function setText(val) {
  return {__html: val};
}

const CityHotel = ({content, lang}) => {
  if (!content) return false;
  return (
      <NewsWrap>
        <NewsDetail dangerouslySetInnerHTML={setText(content[`text_${lang}`])}/>
      </NewsWrap>
  );
};

export default CityHotel;
