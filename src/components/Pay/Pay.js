import React from 'react';
import './style.css'
import { Card, Input, Avatar, Button, Table, Tag, Space } from 'antd';
import { SearchOutlined, EllipsisOutlined, EditOutlined, SettingOutlined } from '@ant-design/icons';

import { Design, Marketing, Sales, IconDay, IconDropdown } from '../Icon/svg';
import Test from '../Test/Test'

const { Meta } = Card;


function Pay(props) {
    return (
        <div className="container">
            <div className="sidebar ">sidebar</div>
            <div className="content">
                <div className="header">header
                </div>
                <div className="table">
                    <div className="table__left">
                        <p>User</p>

                        <div className='table__search'>
                            <Input size="40"  placeholder="Search" prefix={<SearchOutlined />} />
                        </div>
                        <div className='table__card'>
                            <Meta style={{ 'margin-top': '16px', 'margin-left': '16px' }}
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title="Card title"
                            />
                            <hr style={{ 'width': '90%', 'margin-top': '12px' }}></hr>
                            <div className='card__detail'>
                                <p className='card__detail__stt'><Sales />Sales</p>
                                <p className='card__detail__price'>$ 2,709.00</p>
                            </div>
                        </div>
                        <div className='table__card'>
                            <Meta style={{ 'margin-top': '16px', 'margin-left': '16px' }}
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title="Card title"
                            />
                            <hr style={{ 'width': '90%', 'margin-top': '12px' }}></hr>
                            <div className='card__detail'>
                                <p className='card__detail__stt'><Design />Design</p>
                                <p className='card__detail__price'>$ 2,709.00</p>
                            </div>
                        </div>
                        <div className='table__card'>
                            <Meta style={{ 'margin-top': '16px', 'margin-left': '16px' }}
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title="Card title"
                            />
                            <hr style={{ 'width': '90%', 'margin-top': '12px' }}></hr>
                            <div className='card__detail'>
                                <p className='card__detail__stt'><Marketing />Marketing</p>
                                <p className='card__detail__price'>$ 2,709.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="table__right">
                        <div className="table__right__top">
                            <div className='top__left'>
                                <Meta style={{ 'margin-top': '16px', 'margin-left': '16px' }}
                                    avatar={<Avatar size={64} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title="Card title"
                                />
                            </div>
                            <div className='top__right'>
                                <div className='balance'>
                                    <p>Account balance</p>
                                    <span>$2,794.00</span>
                                </div>
                                <Button shape="circle" >...</Button>
                            </div>
                        </div>
                        <p>NAVVVVVVVVVVVVVVVVVVVV</p>
                        <div className='dropdown'>
                            <div className='dropdow__left'>
                                <div className='dropdown__days'>
                                    <Button >
                                        <IconDay />Last 30 days <IconDropdown />
                                    </Button>
                                </div>
                                <div className='dropdown__filter'>
                                    <Button>
                                        Filter by <IconDropdown /></Button>
                                </div>
                            </div>
                            <div className='dropdown__page'>
                                <p>Page 1 of 4</p>
                                <Button> {'<'} </Button>
                                <Button>{'>'} </Button>
                            </div>
                        </div>
                        <div className='table__main'>
                            {/* <Table columns={columns} dataSource={data} /> */}
                            <Test/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pay;