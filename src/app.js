console.log('app.js is running');
//<P>{app.options.length > 0 ? 'Here are your options' : 'No options'}</P>

const app = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: ['one', 'two']
};

//jsx - javascript xml
const template = (
    <div>
        <h1>{app.title}</h1> 
        {app.subTitle && <p>{app.subTitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options!' : 'No options'}</p>
    </div>
);

let count = 0;

const addOne = () => {
    count++;
    console.log('addOne', count);
}

const minusOne = () => {
    console.log(minusOne)
};

const reset = () => {
    console.log(reset)
};

const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset</button>
    </div>
);

const appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);

ReactDOM.render(templateTwo, appRoot);