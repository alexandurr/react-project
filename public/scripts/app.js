console.log('app.js is running');

//jsx - javascript xml

var template = <p>This is JSX from app.js!</p>;
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);