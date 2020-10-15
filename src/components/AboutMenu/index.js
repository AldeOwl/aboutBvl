import React from 'react';
import { MenuItem, Wrap } from './styled';

const titles = [
    'Миссия и ценности',
    'Наша команда',
    'Юридические документы',
    'Признание',
    'Публичные отчеты',
    'Контакты',
]

const AboutMenu = ({ activeTab, setActiveTab }) => {
    return (
        <Wrap>
            {titles.map((item, index) => (
                <MenuItem
                    key={index}
                    onClick={() => setActiveTab(item)}
                    activeTab={activeTab === item}
                >
                    {item}
                </MenuItem>
            ))}
        </Wrap>
    )
};

export default AboutMenu;