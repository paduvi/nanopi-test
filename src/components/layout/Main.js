/**
 * Created by chotoxautinh on 6/4/17.
 */
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Layout} from 'antd';
import Dashboard from '../dashboard';
import Led from '../led';
import Gpio from '../gpio';

const {Content} = Layout;

export default () => (
    <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280}}>
        <Switch>
            <Route path="/led" component={Led}/>
            <Route path="/gpio" component={Gpio}/>
            <Route component={Dashboard}/>
        </Switch>
    </Content>
);