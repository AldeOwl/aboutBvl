import React, {Component} from 'react';
import {
  Icon,
  MainIcon,
  Menu,
  SocialLinks,
  LinksRow
} from './styled';

import facebook from '../../images/facebook.svg';
import instagram from '../../images/instagram.svg';
import youTube from '../../images/youTube.svg';
import vk from '../../images/vk.svg';
import main from '../../images/MYVOLLEY.png';

class Links extends Component {
  render() {
    return (
        <LinksRow>
          <MainIcon href='//www.myvolley.ru' target='_blank'>
            <img src={main} alt='MyVolley'/>
          </MainIcon>
          <Icon href='//www.facebook.com/MYVOLLEYRU' target='_blank'>
            <img src={facebook} alt='Facebook'/>
          </Icon>
          <Icon href='//www.instagram.com/bvl_myvolley/' target='_blank'>
            <img src={instagram} alt='Instagram'/>
          </Icon>
          <Icon
              href='//www.youtube.com/channel/UCkbJqroOixkSBkMwhSI6PJg/'
              target='_blank'
          >
            <img src={youTube} alt='YouTube'/>
          </Icon>
          <Icon href='//vk.com/myvolley' target='_blank'>
            <img src={vk} alt='Vkontakte'/>
          </Icon>
        </LinksRow>
    );
  }
}

export default Links;
