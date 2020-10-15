import React, { Component } from 'react';
import { Wrap, Title } from './styled';
import AboutMenu from '../../components/AboutMenu';
import {getAbout} from "../../service/network";
import Personal from "../../components/Personal";
import Reviews from "../../components/Reviews";
import PresidentSay from "../../components/PresidentSay";
import Documents from "../../components/Documents";
import CityHotel from "../../components/CityHotel";

class AboutPage extends Component {
    state = {
        load: true,
        activeTab: 'Миссия и ценности',
    };
    componentDidMount() {
    //     getAbout()
    //         .then(res => {
    //             this.setState({president: res.filter(item => item.aboutType === 1)[0]});
    //             this.setState({cityHotel: res.filter(item => item.aboutType === 3)[0]});
    //         })
    };

    onPersonalLoad = (personal) => {
        this.setState({
            personal,
            load: false
        });
    };
    updateInfo() {
        this.getData
            .getPersonal()
            .then(this.onPersonalLoad);
    };

    updateReviews() {
        this.getData
            .getComments()
            .then((res) => this.setState({ reviews: res }));
    };

    setActiveTab = (val) => {
        this.setState({ activeTab: val });
    };
    render() {
        const {
            activeTab,
            personal,
            reviews,
            president,
            cityHotel,
        } = this.state;

        return (
            <Wrap>
                <AboutMenu setActiveTab={this.setActiveTab} activeTab={activeTab}/>
                {activeTab === 'president' && <PresidentSay content={president}/>}
                {activeTab === 'documents' && <Documents/>}
                {activeTab === 'city' && <CityHotel content={cityHotel}/>}
                {activeTab === 'personal' && <Personal personal={personal} />}
                {activeTab === 'reviews' && <Reviews reviews={reviews} />}
            </Wrap>
        )
    }
}

export default AboutPage;