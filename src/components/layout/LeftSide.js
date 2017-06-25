/**
 * Created by chotoxautinh on 6/4/17.
 */
import React, {PureComponent} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Layout, Menu, Icon} from 'antd';
const {Sider} = Layout;

const wrap = ComposedComponent => class extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            selectedKeys: [props.location.pathname]
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            this.setState({selectedKeys: [nextProps.location.pathname]});
        }
    }

    clickMenuItem = ({key}) => {
        this.props.history.push(key);
    }

    render() {
        return <ComposedComponent
            {...this.props}
            {...this.state}
            clickMenuItem={this.clickMenuItem}
        />
    }
}

const LeftSide = ({collapsed, selectedKeys, clickMenuItem}) => (
    <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
    >
        <Link to="/">
            <div className="logo"/>
        </Link>
        <Menu theme="dark" mode="inline" selectedKeys={selectedKeys} onClick={clickMenuItem}>
            <Menu.Item key="/led">
                <Icon type="bulb"/>
                <span className="nav-text">Basic</span>
            </Menu.Item>
            <Menu.Item key="/gpio">
                <Icon type="scan"/>
                <span className="nav-text">Button</span>
            </Menu.Item>
        </Menu>
    </Sider>
);

const mapStateToProps = ({collapsed}) => ({collapsed});

export default withRouter(connect(mapStateToProps)(wrap(LeftSide)));

