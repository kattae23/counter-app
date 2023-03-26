import React from 'react';
import ReactDOM from 'react-dom/client'
import CounterApp from './CounterApp';
import FirstApp from './FirstApp';
import HelloWorldApp from './HelloWorldApp';
import './styles.css';


// import HelloWorldApp from './HelloWorldApp';

HelloWorldApp

FirstApp
CounterApp

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <HelloWorldApp />
        <CounterApp value={20}/>
    </React.StrictMode>
)