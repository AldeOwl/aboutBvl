import React from 'react';
import { Head, Logo, Title } from './styled';
import baseLogo from '../../images/BVL LOGO.png';




const Header = ({ logo }) => {
    return (
        <Head>
            <Logo src={logo || baseLogo} />
            <Title>Береговая волейбольная лига</Title>
        </Head>
    )
}

export default Header;