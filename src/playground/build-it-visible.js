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

let visiablilty = false;

const toggleVisibility = () => {
    visiablilty = !visiablilty;

    render();
}
const render = () => {
    const jsx = (
        <div>
            <h1>Visability Toggle</h1>
            <button onClick={toggleVisibility}>
                {visiablilty ? 'Hide details' : 'Show details'}
            </button>
            {visiablilty && (
                <div>
                    <p>Hey, there are some details</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
}

render();
