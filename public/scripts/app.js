'use strict';

console.log('app.js is running');
//<P>{app.options.length > 0 ? 'Here are your options' : 'No options'}</P>

var app = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: ['one', 'two']
};

//jsx - javascript xml
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subTitle && React.createElement(
        'p',
        null,
        app.subTitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options!' : 'No options'
    )
);

var count = 0;

var addOne = function addOne() {
    count++;
    renderCounterApp();
};

var minusOne = function minusOne() {
    console.log(minusOne);
};

var reset = function reset() {
    console.log(reset);
};

var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);


var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'Reset'
        )
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
