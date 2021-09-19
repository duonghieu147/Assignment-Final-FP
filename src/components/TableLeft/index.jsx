import React from 'react';
import './TableLeft.css';

import {  Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import user_reports from '../../testdb/user_reports.json';
import CardMini from '../CardMini';

var db = user_reports;
function TableLeft(props) {
    return (
        <div className="table__left">
            <p>USERS</p>
            <div className='table__search'>
                <Input size="40" placeholder="Search" prefix={<SearchOutlined />} />
            </div>
            {
                db.map((item, key) => {
                    if (item) {
                        return (
                            <CardMini img={item.img} name={item.name} type={item.type} sales={item.sales} />
                        )
                    }

                })
            }
        </div>
    );
}

export default TableLeft;