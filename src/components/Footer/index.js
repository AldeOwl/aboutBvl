import React from 'react';
import {
  Foot,
  Icon,
  Section,
  SectionWrap,
  Title,
  Empty,
  OldSite
} from './styled';
import { withLanguage } from '../../service/checkLanguage';

const renderSponsors = (arr, title) => {
  if (arr.length === 0) {
    return;
  }
  return (
    <SectionWrap>
      <Title>{title}</Title>
      <Section>
        {arr.map(item => {
          return (
            <Icon
              key={item.id}
              id={item.id}
              href={item.url}
              target='_blank'
              size={item.type === 'Генеральный партнер' ? 1 : 0}
            >
              <img src={item.logo} alt={item.name} />
            </Icon>
          );
        })}
      </Section>
    </SectionWrap>
  );
};
const Footer = ({ sponsors, id, text: { footer } }) => {
  if (!sponsors || sponsors.length === 0) {
    sponsors = [];
    return <Empty />;
  }
  return (
    <Foot id='footer'>
      {renderSponsors(
        sponsors.filter(item => item.type === 'Генеральный партнер'),
        `${footer.general}`
      )}
      {renderSponsors(
        sponsors.filter(item => item.type === 'Официальные спонсоры'),
        `${footer.ofSponsors}`
      )}
      {renderSponsors(
        sponsors.filter(item => item.type === 'Официальные партнеры'),
        `${footer.ofPartners}`
      )}
      {renderSponsors(
        sponsors.filter(item => item.type === 'Партнеры'),
        `${footer.partners}`
      )}
      {renderSponsors(
        sponsors.filter(item => item.type === 'Друзья турнира'),
        `${footer.friends}`
      )}
      {renderSponsors(
        sponsors.filter(item => item.type === 'Информационные партнеры'),
        `${footer.info}`
      )}
      {renderSponsors(
        sponsors.filter(item => item.type === 'Клубы Суперлиги ВФВ'),
        `${footer.vfv}`
      )}
      <OldSite
        href={`https://myvolley.ru/servlet/tournament?tid=${id}`}
        target='_blank'
      >
        {footer.link}
      </OldSite>
    </Foot>
  );
};

export default withLanguage(Footer);
