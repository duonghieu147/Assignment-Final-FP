import React, { Component } from 'react';
import { Table, Tag, Space, Card, Avatar, Button, Input } from 'antd';
import 'antd/dist/antd.css';
import './style.css'
import { TypeCard1, TypeCard2, TypeCard3,IconAttach } from '../Icon/svg';

const { Column, ColumnGroup } = Table;
const { Meta } = Card;

const columns = [
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        render: (text, record) => (<>
            <TypeCard1/>Card
        </>
        ),
    },
    {
        title: 'Where',
        dataIndex: 'where',
        key: 'where',
        render: (text, record) => (<>
            <Meta style={{ 'margin-top': '16px', 'margin-left': '16px' }}
                avatar={<Avatar size={16} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={record.where}
            />
        </>
        ),
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
        render: (text, record) => {
            return (
                <div style={{ display: 'flex' }}>
                    <b>{record.amount < 0 ? <p style={{ color: '#E92C2C' }}>- $</p> : <p style={{ color: '#00BA34' }}>+ $</p>}</b><b>{record.amount < 0 ? <p style={{ color: '#E92C2C' }}>{-record.amount}</p> : <p style={{ color: '#00BA34' }}>{record.amount}</p>}</b>
                </div>
            );
        }
    },
    {
        title: 'Date',
        key: 'date',
        dataIndex: 'date',
        render: (text, record) => {
            return (
                <>
                    <div style={{ display: 'flex',justifyContent:'space-around' }}>
                        <div>
                            <p className='date'>{record.date[0]}</p>
                            <p className='time'>{record.date[1]}</p>
                        </div>
                        <b>{record.date[2] ? <IconAttach /> : <TypeCard2 />}</b>
                        <Button>...</Button>
                    </div>
                </>
            );
        }
    },
];

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        type: i,
        where: 'John Brown',
        description: 'Subscription renewal',
        amount: -2000,
        date: ['24.12.2021', '11:16 PM', true],
    });
}
function Tables(props) {
    return (
        <>
        <Table columns={columns} dataSource={data} />
        <div className='inputPage' >
            <p>Go to</p>
            <input value="10"></input>
            <p>Page</p>
        </div>
        </>
        
    );
}

export default Tables;