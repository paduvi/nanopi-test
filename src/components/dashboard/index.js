/**
 * Created by chotoxautinh on 6/4/17.
 */
import React from 'react';
import {Row, Col} from 'antd';

export default () => (
    <Row type="flex" justify="space-around">
        <Col span={12}>
            <img width="100%" src={process.env.PUBLIC_URL + "/img/M1-01.jpg"} alt=""/>
        </Col>
        <Col span={12}>
            <img width="100%" src={process.env.PUBLIC_URL + "/img/M1-02.jpg"} alt=""/>
        </Col>
    </Row>
)