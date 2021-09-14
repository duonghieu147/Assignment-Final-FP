import React from 'react';
import './TableLeft.css';
import { Icon } from '../../assets/svgs/Icon';

import { Card, Input, Avatar } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import user_reports from '../../testdb/user_reports.json';

const { Meta } = Card;
var db = user_reports;


function TableLeft(props) {
    function save(name,url,sum){
        localStorage.setItem('name', name);
        localStorage.setItem('url', url);
        localStorage.setItem('sum', sum);
    }
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
                            <div className='table__card' 
                            // onClick={this.save.bind(this,item.name,item.url,item.sum)}
                            >
                                <Meta style={{ 'margin-top': '16px', 'margin-left': '16px' }}
                                    avatar={<Avatar src={item.img} />}
                                    title={item.name}
                                />
                                <hr ></hr>
                                <div className='card__detail'>
                                    <div>
                                        {
                                            item.type=="Sales"
                                            ?<p className='card__detail__stt' style={{ color: '#F98600' ,background:'rgba(255, 150, 27, 0.1)' }}><Icon.Sales/>{item.type}</p>
                                            :(item.type=="Marketing"
                                                ?<p className='card__detail__stt' style={{ color: '#0085FF' ,background:'rgba(0, 133, 255, 0.1)' }}><Icon.Marketing/>{item.type}</p>
                                                :<p className='card__detail__stt'style={{ color: '#00BA34' ,background:'rgba(0, 186, 52, 0.1)' }}><Icon.Design/>{item.type}</p>)
                                        }
                                    </div>
                                    <p className='card__detail__price'>{item.sum}</p>
                                </div>
                            </div>
                        )
                    }

                })
            }
        </div>
    );
}

export default TableLeft;