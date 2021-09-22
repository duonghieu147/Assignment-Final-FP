import React from 'react';
import './CardMini.scss'
import { Icon } from '../../assets/svgs/Icon';


function CardMini(props) {

    return (
        <div className='table__card' id='table__card'
            onClick={() => {
                localStorage.setItem('img', props.img);
                localStorage.setItem('name', props.name);
                localStorage.setItem('sales', props.sales);
            }}
        >
            <div className='table__top'>
                <img id='img_user' src={props.img} />
                <p id='title_user'>{props.name}</p>
            </div>
            <hr ></hr>
            <div className='card__detail'>
                <div>
                    {
                        props.type == "Sales"
                            ? <p className='card__detail__stt' style={{ color: '#F98600', background: 'rgba(255, 150, 27, 0.1)' }}><Icon.Sales />{props.type}</p>
                            : (props.type == "Marketing"
                                ? <p className='card__detail__stt' style={{ color: '#0085FF', background: 'rgba(0, 133, 255, 0.1)' }}><Icon.Marketing />{props.type}</p>
                                : <p className='card__detail__stt' style={{ color: '#00BA34', background: 'rgba(0, 186, 52, 0.1)' }}><Icon.Design />{props.type}</p>)
                    }
                </div>
                <p className='card__detail__price'>{props.sales}</p>
            </div>
        </div>
    );
}

export default CardMini;