console.log('app.js is running');

//JSX - javascript xml
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{(app.options.length > 0) ? 'Here are your options:' : 'No Options'}</p>
    </div>
);

const getLocation = (location) => {
    if (location) {
        return <p>Location: {location}</p>
    }
};

const user = {
    name: 'Miguel Becerra',
    profession: 'software developer',
    age: 23,
    location: 'Chimba'
};


const templateTwo = (
    <div>
        {/*ternary operators*/}
        <h1>{user.name ? user.name : 'Unknown'}</h1>
        <h3>{user.profession || 'Unknown'}</h3>
        {/*logical operators*/}
        {(user.age && user.age > 17) && <p>Age : {user.age}</p>}
        {/*functions*/}
        {getLocation(user.location)}
    </div>
);


const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);