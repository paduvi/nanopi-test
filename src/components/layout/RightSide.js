/**
 * Created by chotoxautinh on 6/4/17.
 */
import React from 'react';
import {Layout} from 'antd';

import Main from './Main';
import Footer from './Footer';

export default ({collapsed, toggle}) => (
    <Layout>
        <Main/>
        <Footer/>
    </Layout>
);