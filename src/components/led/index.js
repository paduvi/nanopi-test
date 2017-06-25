/**
 * Created by chotoxautinh on 6/4/17.
 */
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Form, InputNumber, Icon, Tabs, Button, Slider, Row, Col} from 'antd';

import {rgb} from 'd3-color';
import {interpolateRgb} from 'd3-interpolate';

import {odd, even} from '../../nano-spec';

import {toggle, changeLedValue} from '../../actions/led';
const ipcRenderer = window.require('electron').ipcRenderer;

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const ButtonGroup = Button.Group;
const formItemLayout = {
    labelCol: {span: 7},
    wrapperCol: {span: 12},
};
const wrap = ComposedComponent => class extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            port: 7,
            isBlinking: false,
            isPWM: false
        }
    }

    blink = () => {
        this.setState({isBlinking: true});
        this.timer = setInterval(() => {
            this.props.toggle();
        }, 200);
    }

    cancelBlink = () => {
        if (this.state.isBlinking) {
            this.setState({isBlinking: false});
            clearInterval(this.timer);
        }
    }

    changeTab = (key) => {
        if (key !== '1') {
            this.cancelBlink();
            this.setState({isPWM: true});
        } else {
            this.setState({isPWM: false});
        }
    }

    componentWillUpdate = ({led}, {port}) => {
        if (led !== this.props.led || port !== this.state.port) {
            return this.sendToMainProc(port, led);
        }
    }

    sendToMainProc = (pinPort, ledValue) => {
        const [pin] = pinPort % 2 ? odd.filter(e => e.pin === pinPort) : even.filter(e => e.pin === pinPort);

        const {gpio} = pin;
        if (this.state.isPWM) {
            ipcRenderer.send('pwmWrite', gpio, ledValue);
        } else {
            ipcRenderer.send('digitalWrite', gpio, Math.round(ledValue / 1024));
        }

    }

    componentWillUnmount = () => {
        this.cancelBlink();
    }

    handleNumberChange = (value) => {
        this.setState({port: value});
    }

    render() {
        return <ComposedComponent
            {...this.props}
            {...this.state}
            changeTab={this.changeTab}
            blink={this.blink}
            cancelBlink={this.cancelBlink}
            handleNumberChange={this.handleNumberChange}
        />
    }
}

const Led = (props) => {
    const {led, port, handleNumberChange, changeTab} = props;
    const {isBlinking, blink, cancelBlink} = props;
    const {changeLedValue} = props;

    const high = rgb(245, 166, 35);
    const low = rgb('#CCC');

    const color = interpolateRgb(low, high)(led / 1024);
    return (
        <div>
            <FormItem
                {...formItemLayout}
                label="Header Pin Port"
                help={"between 1 & 40"}
            >
                <InputNumber
                    min={1}
                    max={40}
                    value={port}
                    onChange={handleNumberChange}
                />
            </FormItem>
            <Tabs defaultActiveKey="1" onChange={changeTab}>
                <TabPane tab="Blink LED" key="1">
                    <ButtonGroup>
                        <Button onClick={cancelBlink} icon="poweroff" disabled={!isBlinking}>Cancel</Button>
                        <Button type="primary" onClick={blink} disabled={isBlinking}>
                            Try<Icon type="caret-right"/>
                        </Button>
                    </ButtonGroup>
                </TabPane>
                <TabPane tab="Linear" key="2">
                    <Row>
                        <Col span={12}>
                            <Slider min={0} max={1024} onChange={changeLedValue} value={led}/>
                        </Col>
                        <Col span={4}>
                            <InputNumber
                                min={0}
                                max={1024}
                                style={{marginLeft: 16}}
                                value={led}
                                onChange={changeLedValue}
                            />
                        </Col>
                    </Row>
                </TabPane>
            </Tabs>
            <div className="led-content">
                <Icon type="star" style={{color: color}}/>
            </div>
        </div>
    );
}

const mapStateToProps = ({led}) => ({led});

export default connect(mapStateToProps, {toggle, changeLedValue})(wrap(Led));