import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button
                className="button button--link"
                disabled={!props.options.length > 0}
                onClick={props.handleDeleteOptions}>Remove All</button>
        </div>
        {props.options.length === 0 && <p className="widget__message">Please add an option to get started.</p>}
        <div>
            <ol className="options-list">
                {
                    props.options.map((option, key) => {
                        return (
                           <Option 
                                key={key} 
                                count={key + 1} 
                                option={option} 
                                handleDeleteOption={props.handleDeleteOption} />
                        )
                    })
                }
            </ol>
        </div>
    </div>
);



export default Options;