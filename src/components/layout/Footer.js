/**
 * Created by chotoxautinh on 6/4/17.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Layout, Icon} from 'antd';

import {toggle} from '../../actions/collapsed';

const Footer = ({collapsed, toggle}) => (
    <Layout.Footer style={{background: '#fff', padding: 0}}>
        <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={toggle}
        />
    </Layout.Footer>
)

const mapStateToProps = ({collapsed}) => ({collapsed});

export default connect(mapStateToProps, {toggle})(Footer);