'use strict';

// my janky version
/*
const app = {
    title: "Visability Toggle"
}

let btnText = "Show details";

const toggleBtn = () => {
    if(btnText == "Show details") {
        btnText = "Hide details";
    } else {
        btnText = "Show details";
    }
    render();
};

const appRoot = document.getElementById('app');


const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleBtn}>{btnText}</button>
            <p>{btnText == "Show details" ? '' : 'Here are some details'}</p>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();

*/

var visiablilty = false;

var toggleVisibility = function toggleVisibility() {
    visiablilty = !visiablilty;

    render();
};
var render = function render() {
    var jsx = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visability Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            visiablilty ? 'Hide details' : 'Show details'
        ),
        visiablilty && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Hey, there are some details'
            )
        )
    );

    ReactDOM.render(jsx, document.getElementById('app'));
};

render();
