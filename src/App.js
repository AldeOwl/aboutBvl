import React, {Component} from 'react';
import {
  Wrapper,
  Aplication,
  Content
} from "./styled";

import Header from './components/Header';
import AboutPage from './containers/AboutPage';
import Links from "./components/Links";


class App extends Component {

  render() {
    return (
        <Wrapper>
          <Aplication id='application'>
            <Header/>
            <Links/>
            <Content>
              <AboutPage/>
            </Content>
            {/*<Footer sponsors={sponsors} id={id} />*/}
          </Aplication>
        </Wrapper>
    );
  }
}

export default App;
