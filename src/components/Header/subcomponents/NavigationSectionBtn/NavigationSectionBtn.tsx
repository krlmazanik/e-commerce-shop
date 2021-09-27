import React from 'react';
import './NavigationSectionBtn.scss';

interface INavigationSectionBtn {
    label: string;
}

const NavigationSectionBtn = (props: INavigationSectionBtn): JSX.Element => {
    const { label } = props;

    return (
        <button className="navigation-section-btn">
            {label}
        </button>
    );
};

export { NavigationSectionBtn };
