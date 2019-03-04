class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            Visibility: false
        };
    }
    handleToggleVisibility() {
        //To access to 'this' in the method, the method must be bind in the constructor otherwise you will
        //get this error
        //Uncaught TypeError: Cannot read property 'setState' of undefined
        this.setState((prevState) => {
            return {
                Visibility:!prevState.Visibility
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.Visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.Visibility && (
                    <div>
                        <p>Here are the details</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// let toggleDetails;
// const onToggleDetails = () => {
//     toggleDetails = !toggleDetails;
//     render();
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onToggleDetails}>{toggleDetails ? 'Hide details' : 'Show details'}</button>
//             {toggleDetails && (
//                 <div>
//                     <p>Here are the details</p>
//                 </div>
//             )}
//         </div>
//     );

//     const appRoot = document.getElementById('app');
//     ReactDOM.render(template, appRoot);
// };

// render();