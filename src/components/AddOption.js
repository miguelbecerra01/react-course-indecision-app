import React from 'react';

export default class AddOption extends React.Component {
    //old way with out the pluggin babel-plugin-transform-class-properties
    // constructor(props) {
    //     super(props);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.state = {
    //         error: undefined
    //     };
    // }

    //new way, now the functions can be arrow functions
    //pull the state of constructor
    state = {
        error: undefined
    };
    //transform to arrow function
    handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value;
        const error = this.props.handleAddOption(option);

        //implicitly return the value, no needed to write return
        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.option.value = '';
            e.target.elements.option.focus();
        }
    };
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input  className="add-option__input" type="text" name="option"></input>
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}