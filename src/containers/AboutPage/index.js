import React, {Component} from 'react';
import {Wrap, Title} from './styled';
import AboutMenu from '../../components/AboutMenu';
import {getAbout, getDocuments, getConfession} from "../../service/network";
import Mission from "../../components/Mission";
import Documents from "../../components/Documents";
import Gallery from "../../components/Gallery";
import Loader from '../../components/Loader';

class AboutPage extends Component {
  state = {
    load: true,
    documentLoad: true,
    confessionLoad: true,
    activeTab: 'О нас',
    mission: '',
    contacts: '',
    juridical: '',
    publicDoc: '',
    confession: [],

  };

  componentDidMount() {
    getAbout()
        .then(res => {
          this.setState({
            mission: res.filter(item => item.aboutType === 5)[0],
            contacts: res.filter(item => item.aboutType === 6)[0],
            load: false,
          });
        })
  };

  documentsHandler = () => {
    getDocuments()
        .then(res => {
          this.setState({
            juridical: res.filter(item => item.type === 9),
            publicDoc: res.filter(item => item.type === 15),
            documentLoad: false,
          });
        })
  };

  confessionHandler = () => {
    getConfession()
        .then(res => {
          this.setState({
            confession: res,
            confessionLoad: false,
          });
        })
  };

  updateInfo() {
    this.getData
        .getPersonal()
        .then(this.onPersonalLoad);
  };

  updateReviews() {
    this.getData
        .getComments()
        .then((res) => this.setState({reviews: res}));
  };

  setActiveTab = (val) => {
    this.setState({activeTab: val});
  };

  render() {
    const {
      load,
      documentLoad,
      confessionLoad,
      activeTab,
      juridical,
      publicDoc,
      mission,
      contacts,
      confession,
    } = this.state;

    return (
        <Wrap>
          <AboutMenu setActiveTab={this.setActiveTab} activeTab={activeTab}/>
          {load ?
              <Loader/>
              :
              <>
                {activeTab === 'О нас' && <Mission mission={mission}/>}
                {activeTab === 'Контакты' && <Mission mission={contacts}/>}
                {
                  activeTab === 'Юридические документы' &&
                    <Documents
                        documentLoad={documentLoad}
                        getDocuments={this.documentsHandler}
                        documents={juridical}
                    />
                }
                {activeTab === 'Признание' &&
                  <Gallery
                      images={confession}
                      getConfession={this.confessionHandler}
                      confessionLoad={confessionLoad}
                  />
                }
                {activeTab === 'Публичные отчеты' &&
                  <Documents
                      documentLoad={documentLoad}
                      getDocuments={this.documentsHandler}
                      documents={publicDoc}
                  />
                }
                {/*{activeTab === 'city' && <CityHotel content={cityHotel}/>}*/}
                {/*{activeTab === 'personal' && <Personal personal={personal} />}*/}
                {/*{activeTab === 'reviews' && <Reviews reviews={reviews} />}*/}
              </>
          }
        </Wrap>
    )
  }
}

export default AboutPage;