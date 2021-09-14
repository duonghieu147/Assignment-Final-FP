import React from 'react';

import { Table, Card } from 'antd';
import 'antd/dist/antd.css';

import './TableRight.css';
import { Icon } from '../../assets/svgs/Icon';
import dbreports from '../../testdb/reports.json';

const { Meta } = Card;

const columns = [
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        render: (text, record) => (<>
            <div className='type'>
                <Icon.TypeCard1 />
                <p>{record.type}</p>
            </div>
        </>
        ),
    },
    {
        title: 'Where',
        dataIndex: 'where',
        key: 'where',
        render: (text, record) => (
            <div className='where'>
                <Icon.Spotify />
                <p>{record.where}</p>
            </div>
        ),
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        render: (text, record) => {
            return (
                <div className='description'>
                    <p>{record.description}</p>
                </div>
            );
        }
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
        render: (text, record) => {
            return (
                <div className='amount'>
                    <b>{record.amount.charAt(0) == '-' ? <p style={{ color: '#E92C2C' }}>{record.amount}</p> : <p style={{ color: '#00BA34' }}>{record.amount}</p>}</b>
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
                    <div className='date'>
                        <div>
                            <p className='date__date'>{record.date}</p>
                            <p className='date__time'>{record.time}</p>
                        </div>
                        <b>{record.date[2] ? <Icon.IconAttach /> : <Icon.TypeCard2 />}</b>
                        <Icon.ThreeDot />
                    </div>
                </>
            );
        }
    },
];

var data = [];
data = dbreports;

function TableRight(props) {
    return (
        <>
            <Table columns={columns} dataSource={data} />
            <div style={{ display: 'flex' }}>
                <p>Go to</p>
                <input style={{ width: '60px', height: '40px', margin: '0 10px' }} value="10"></input>
                <p>Page</p>
            </div>
        </>
    );
}

export default TableRight;