import React from 'react';
import {
  NewsWrap,
  NewsDetail,
} from './styled';

function setText(val) {
  return {__html: val};
}

const Mission = ({mission}) => {
  if (!mission.text) return false;
  return (
      <NewsWrap>
        <NewsDetail dangerouslySetInnerHTML={setText(mission.text)}/>
      </NewsWrap>
  );
};

export default Mission;
