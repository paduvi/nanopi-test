import React from 'react';
import {Layout} from 'antd';

import LeftSide from './layout/LeftSide';
import RightSide from './layout/RightSide';

export default ({collapsed, toggle}) => (
    <Layout id="components-layout-demo-custom-trigger" className="ant-layout ant-layout-has-sider">
        <LeftSide/>
        <RightSide/>
    </Layout>
);