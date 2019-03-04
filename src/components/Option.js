import React from 'react';

const Option = (props) => {
    const handleDeleteOption = () => {
        props.handleDeleteOption(props.option);
    };

    return (
        <li className="option option__text">{props.count}. {props.option}
            <button 
                className="button button--link"
                onClick={handleDeleteOption} >remove</button>
        </li>
    );
};

export default Option;
