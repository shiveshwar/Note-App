import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NoteApp from './Note/NoteApp';
import configureStore  from './store/configureStore';
import { Provider } from 'react-redux';


const App = () => (
    <Provider store={configureStore()}>
        <NoteApp />
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
