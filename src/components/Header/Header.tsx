import React from 'react';
import './Header.scss';
import { NavigationSectionBtn, Select, Switch } from './subcomponents';
import {
    HeartOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Badge } from 'antd';

const selectOptions = [
    { value: 'en', label: 'EN' },
    { value: 'ru', label: 'RU' },
];

const Header = (): JSX.Element => {
    return (
        <div className="header">
            <div className="navigation-section">
                <NavigationSectionBtn label="Home" />
                <NavigationSectionBtn label="Catalog" />
            </div>

            <div className="logo-section">
        E-shop
            </div>

            <div className="control-section">
                <Switch onChange={() => undefined}/>
                <Select options={selectOptions} onChange={() => undefined}/>
                <div className="user-section">
                    {/* TODO: finish the implementation of user buttons(maybe wrap them into buttons) */}
                    <SearchOutlined />
                    <HeartOutlined />
                    <Badge count={5}>
                        <ShoppingCartOutlined />
                    </Badge>
                    <UserOutlined />
                </div>
            </div>
        </div>
    );
};

export { Header };
