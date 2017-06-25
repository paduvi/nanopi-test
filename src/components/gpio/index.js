/**
 * Created by chotoxautinh on 6/4/17.
 */
import React from 'react';
import {Row, Col, Table} from 'antd';

import {odd, even} from '../../nano-spec';

const columns = [{
    title: 'PIN#',
    dataIndex: 'pin',
    key: 'pin',
}, {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
}, {
    title: 'Linux gpio',
    dataIndex: 'gpio',
    key: 'gpio',
}, {
    title: 'Status',
    dataIndex: 'status',
    key: 'status'
}];


export default ()=>(
    <Row>
        <Col span={12}>
            <Table dataSource={odd} columns={columns} size="small" pagination={false}/>
        </Col>
        <Col span={12}>
            <Table dataSource={even} columns={columns} size="small" pagination={false}/>
        </Col>
    </Row>
)