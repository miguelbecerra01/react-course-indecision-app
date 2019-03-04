import React from 'react';

import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

//Statefull class component
//export default works beacuse is not a named export
export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined,
        isModalOpen: false,
    };

    //class properties
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };
    handlePick = () => {
        const rnd = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[rnd];
        this.setState(() => ({
            selectedOption: option,
            isModalOpen: true
        }));
    };
    handleCloseModal = () => {
        this.setState(() => ({           
            isModalOpen:false
        }));
    };
    handleAddOption = (option) => {
        if (!option.trim()) {
            return 'Enter valid value to add item';

            //indexof returns > -1 if the option already exists
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));

    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter(option => option !== optionToRemove)
        }));

    };
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options: options }));
            }

        } catch (e) {
            //do nothing at all.
        };
    }
    //tells when the component data has changed
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {

            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }

    }
    //tells when the component goes away, disapear from the DOM
    componentWillUnmount() {
        console.log('component will unmount');
    }
    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div >
                <Header
                    title={title}
                    subtitle={subtitle} />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick} />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption} />
                        <AddOption
                            handleAddOption={this.handleAddOption} />
                    </div>
                </div>

                <OptionModal
                    selectedOption={this.state.selectedOption}
                    isModalOpen={this.state.isModalOpen}
                    handleCloseModal={this.handleCloseModal} />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};


