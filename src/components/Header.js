import React from 'react';

//Stateless functional components
//can be used when only it uses the render() without state.
const Header = (props) => (
    <div className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
        </div>
    </div>
);

//defaults values if the values are not sent by the parent in the props parameter
Header.defaultProps = {
    title: 'Indecision'
};

export default Header;