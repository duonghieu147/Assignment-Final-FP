import React from 'react';

import './Reports.css';
import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
import TableRight from '../../components/TableRight';
import TableLeft from '../../components/TableLeft';
import { Icon } from '../../assets/svgs/Icon';



import { Card, Avatar, Button } from 'antd';

const { Meta } = Card;


function Reports(props) {
    return (
        <div className="container">
            <div className="sidebar "><SideBar /></div>
            <div className="content">
                <div className="header"><Header /></div>
                <div className="table">
                    <TableLeft />
                    <div className="table__right">
                        <div className="table__right__top">
                            <div className='top__left'>
                                <Meta style={{ 'margin-top': '16px', 'margin-left': '16px' }}
                                    avatar={<Avatar size={64} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title="Ralph Edwards"
                                />
                            </div>
                            <div className='top__right'>
                                <div className='balance'>
                                    <p>Account balance:</p>
                                    <span>$2,794.00</span>
                                </div>
                                {/* <Button shape="circle" >...</Button> */}
                                <button >...</button>
                            </div>
                        </div>
                        <div className='table__right__nav'>
                            <p><a className='active' href='#'>Activities</a></p><p>Transfer</p><p>Automatic Transfer</p><p>Budgets</p><p>Notifications</p><p>Cards</p>
                        </div>
                        <hr/>
                        <div className='dropdown'>
                            <div className='dropdow__left'>
                                <div className='dropdown__days'>
                                    <Button >
                                        <Icon.IconDay />Last 30 days <Icon.IconDropdown />
                                    </Button>
                                </div>
                                <div className='dropdown__filter'>
                                    <Button>
                                        Filter by <Icon.IconDropdown /></Button>
                                </div>
                            </div>
                            <div className='dropdown__page'>
                                <p>Page 1 of 4</p>
                                <Button> {'<'} </Button>
                                <Button>{'>'} </Button>
                            </div>
                        </div>
                        <div className='table__main'>
                            <TableRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reports;