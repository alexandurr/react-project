console.log('app.js is running');
//<P>{app.options.length > 0 ? 'Here are your options' : 'No options'}</P>

const app = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }

    render();
};

const removeAll = () => {
    app.options =[];
    render();
}

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1> 
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options!' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();