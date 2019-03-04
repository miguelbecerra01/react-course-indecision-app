

let toggleDetails;
const onToggleDetails = () => {
    toggleDetails = !toggleDetails;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onToggleDetails}>{toggleDetails ? 'Hide details' : 'Show details'}</button>
            {toggleDetails && (
                <div>
                    <p>Here are the details</p>
                </div>
            )}
        </div>
    );

    const appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot);
};

render();