import React from 'react';
import style from './Presentation.module.css';
import { Select, Input } from 'antd';
import RealtorCard from './RealtorCard';
import PresenatationRealtorCard from './PresenatationRealtorCard';

import { ReactComponent as Sort } from '../icons/Sort.svg';

const sortOptions = [{
    value: 'default',
    text: 'По умолчанию',
    default: true
},
{
    value: 'date',
    text: 'По дате',
},
{
    value: 'price',
    text: 'По цене',
},
]

const { Option } = Select;

const Presentation = (props) => {

    const { cards, realtorInfo } = props;

    const defaultSortValue = sortOptions.find(item => {
        return item.default;
    }).value;


    return (
        <div>
            <div className={style.topInfo}>
                <div className={style.titleWrapper}>
                    <h1 className={style.title}>Продажа квартир в <span className={style.city}>Санкт-Петербурге</span></h1>
                </div>

                <div className={style.realtorCardWrapper}>
                    <RealtorCard realtorInfo={realtorInfo} />
                </div>

            </div>

            <div className={style.cardsNumAndSort}>

                <div className={style.sortWrapper}>

                    <Input.Group className={style.sort}>

                        <Sort className={style.sortIcon} />

                        <Select
                            defaultValue={defaultSortValue}
                            className={style.sortSelect}>
                            {
                                sortOptions.map(option => {
                                    return (
                                        <Option value={option.value}>{option.text}</Option>
                                    )
                                })
                            }
                        </Select>

                    </Input.Group>

                </div>

                <div className={style.totalAdWrapper}>
                    <p className={style.totalAd}>Объявлений: <span className={style.num}>{realtorInfo.totalAdsNum}</span></p>
                </div>
            </div>


            {
                cards.map(item => {
                    return <PresenatationRealtorCard content={item} />;
                })
            }

        </div>
    )
}

export default Presentation; 