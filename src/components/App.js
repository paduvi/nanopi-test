/**
 * Created by chotoxautinh on 6/4/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {LocaleProvider} from 'antd';
import viVN from 'antd/lib/locale-provider/vi_VN';
import 'antd/dist/antd.css';

import Root from './Root';

const App = ({store}) => (
    <Provider store={store}>
        <LocaleProvider locale={viVN}>
            <Router>
                <Root/>
            </Router>
        </LocaleProvider>
    </Provider>
);

App.propTypes = {
    store: PropTypes.object.isRequired
}

export default App;