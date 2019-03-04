//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Function/bind
//https://reactjs.org/docs/react-component.html
//a react component is a class that extends from react.component class
//must have the first letter capitalized and has to have a render method

/*
indecisionApp
    Header
    Action
    Options
        Option
    AddOption
*/
//https://www.npmjs.com/package/react
//https://www.npmjs.com/package/react-dom
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Function/bind
//https://reactjs.org/docs/react-component.html
//a react component is a class that extends from react.component class
//must have the first letter capitalized and has to have a render method

/*
indecisionApp
    Header
    Action
    Options
        Option
    AddOption
*/

//Statefull class component
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        };
    }
    //before load the component - lifecycle method
    //https://reactjs.org/docs/react-component.html
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
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));

        //long version of a arrow function
        // this.setState(() => {
        //     return {
        //         options: []
        //     };
        // });

        //medium no neded to add return because it returned with the parentesis()
        // this.setState(() => ({ 
        //     options: [] 
        // }));

        //short version of arrow function if only one item is returned, 
        //if in the arrow function is with () returns the item,  otherwise if is used the curlybraces is a definition

        /*
        this.setState(() => {
            return { name: '' };
        });

        this.setState(() => ({ name: '' }));
        */
    }
    handlePick() {
        const rnd = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[rnd];
        alert(option);
    }
    handleAddOption(option) {
        //conditional logic
        if (!option.trim()) {
            return 'Enter valid value to add item';

            //indexof returns > -1 if the option already exists
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        /*
        this.setState((prevState) => {
            return {
                //return a new array with the new option,
                //concat joins two arrays and return a new one
                //can be an string the value of concat
                options: prevState.options.concat(option)
            };
        });
        */

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));

    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter(option => option !== optionToRemove)
        }));

    }
    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header
                    title={title}
                    subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick} />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption} />
                <AddOption
                    handleAddOption={this.handleAddOption} />

            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value;
        const error = this.props.handleAddOption(option);

        //implicitly return the value, no needed to write return
        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.option.value = '';
            e.target.elements.option.focus();
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

//Stateless functional components
//can be used when only it uses the render() without state.
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}
//defaults values if the values are not sent by the parent in the props parameter
Header.defaultProps = {
    title: 'Indecision'
};

const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.handlePick}>What should I do?</button>
        </div>
    );
};

// const Options = (props) => {
//     return (
//         <div>
//             <div>
//                 <button onClick={props.handleDeleteOptions}>Remove All</button>
//             </div>
//             <ol>
//                 <Option options={props.options} handleDeleteOption={props.handleDeleteOption} />
//             </ol>
//         </div>
//     );
// };

// const Option = (props) => {
//     const handleDeleteOption = (e) => {
//         e.preventDefault();
//         props.handleDeleteOption(e);
//     };

//     return (
//         props.options.map((option, key) => {
//             return <li key={key}>{option} <button onClick={handleDeleteOption} value={option}>delete</button></li>
//         })
//     );
// }


const Options = (props) => {
    return (
        <div>
            <div>
                <button disabled={!props.options.length > 0} onClick={props.handleDeleteOptions}>Remove All</button>
            </div>
            {props.options.length === 0 && <p>Please add an option to get started.</p>}
            <ol>
                {
                    props.options.map((option, key) => {
                        return <Option key={key} option={option} handleDeleteOption={props.handleDeleteOption} />
                    })
                }
            </ol>
        </div>
    );
};

const Option = (props) => {
    const handleDeleteOption = () => {
        props.handleDeleteOption(props.option);
    };

    return (
        <li> {props.option} <button onClick={handleDeleteOption} >delete</button></li>
    );
}

//



//Stateless Functional Component
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };
//ReactDOM.render(<User name="Miguel Becerra" age="32" />, document.getElementById('app'));

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));