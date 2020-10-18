import React, {Component} from 'react';
import {Wrap, Title} from './styled';
import AboutMenu from '../../components/AboutMenu';
import {getAbout, getDocuments} from "../../service/network";
import Personal from "../../components/Personal";
import Reviews from "../../components/Reviews";
import Mission from "../../components/Mission";
import Documents from "../../components/Documents";
import CityHotel from "../../components/CityHotel";
import Loader from '../../components/Loader';

class AboutPage extends Component {
  state = {
    load: true,
    documentLoad: true,
    activeTab: 'Миссия и ценности',
    mission: '',
    contacts: '',
    juridical: '',
    publicDoc: '',
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
          console.log(res.filter(item => item.type === 9))
          this.setState({
            juridical: res.filter(item => item.type === 9),
            publicDoc: res.filter(item => item.type === 15),
            documentLoad: false,
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
      activeTab,
      juridical,
      publicDoc,
      mission,
      contacts,
    } = this.state;

    return (
        <Wrap>
          <AboutMenu setActiveTab={this.setActiveTab} activeTab={activeTab}/>
          {load ?
              <Loader/>
              :
              <>
                {activeTab === 'Миссия и ценности' && <Mission mission={mission}/>}
                {activeTab === 'Контакты' && <Mission mission={contacts}/>}
                {
                  activeTab === 'Юридические документы' &&
                    <Documents
                        documentLoad={documentLoad}
                        getDocuments={this.documentsHandler}
                        documents={juridical}
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