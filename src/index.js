import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import initStore from './configureStore';

const store = initStore();

render(<App store={store}/>, document.getElementById('root'));
