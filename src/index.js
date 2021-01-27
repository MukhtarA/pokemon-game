import React from 'react';
import ReactDOM from 'react-dom';
import HeaderBlock from "./components/Header";
import App from "./App";

const list = ['item1', 'item2', 'item3', 'item4', 'item5'];
const AppList = () => {
    return(
        <div>
            <ul>
            {list.map((item) => (<li>{item}</li>))}
            </ul>
        </div>
        );
}

const AppInput = () => {
    return(
        <label htmlFor='search'>
            <input
                placeholder={'Search...'}
                id='search'
            />
        </label>
);
}

const AppHeader = () => {
    return(
        <h1 className="App-header">Hello world</h1>
    );
}



ReactDOM.render(<App/>, document.getElementById('root'));
