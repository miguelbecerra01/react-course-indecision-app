/*REACT COMPONENT STATE
Steps:
1.-Setup default state object
2.-Component rendered with default state values * (automatically)
3.-Change state based on event
4.-Component re-rendered using new state values * (automatically)
5.-Start again at 3

*/
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        //Step 1 - Setup default state object (must be this.state is a special word for React)
        this.state = {
            count: props.count //defined in defaultProps
        };
    }
    componentDidMount() {
        try {
            const count = parseInt(localStorage.getItem('count'), 10);
            if (!isNaN(count)) {
                this.setState(() => ({
                    count: count
                }));
            }
        } catch (e) {
            console.log(e);
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log('componentDidUpdate', this.state.count);
            localStorage.setItem('count', this.state.count);
        }
    }
    handleAddOne() {
        //Step 3.-Change state based on event
        //for accesing the this...you must bind the method in the constructor
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne() {
        //Step 3.-Change state based on event
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    handleReset() {
        //Step 3.-Change state based on event
        const count = 0;
        localStorage.setItem('count', count);
        this.setState(() => ({ count }));
    }
    render() {
        return (
            <div>
                <h2>Hi {this.state.name}</h2>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

//default values for Counter component
Counter.defaultProps = {
    count: 0
}

//with defaultProps you can add the value in the component
//<Counter count={0}/>
ReactDOM.render(<Counter />, document.getElementById('app'))


// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };



// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// };


// renderCounterApp();