import React from 'react';
import style from './RealtorCard.module.css';

import { ReactComponent as Phone } from '../icons/Phone.svg';
import { ReactComponent as Email } from '../icons/Email.svg';


const RealtorCard = (props) => {

    debugger

    const { realtorInfo } = props;
    const { name, photo, phone, email } = realtorInfo;


    return (
        <div className={style.card}>

            <div className={style.header}>
                <img className={style.photo} src={photo} />
                <div className={style.info}>
                    <div className={style.nameAndProfession}>
                        <p className={style.profession}>Риэлтор</p>
                        <h6 className={style.name}>{name}</h6>
                    </div>

                    <div className={style.contactUnited}>

                        <div className={style.contactInfoItemWrapper}>
                            <div className={style.contactInfoItem}>
                                <a href={`tel:${phone.short}`}>{phone.full}</a>
                                <Phone />
                            </div>
                        </div>


                        <div className={style.contactInfoItemWrapper}>
                            <div className={style.contactInfoItem}>
                                <a href={`mailto:${email}`}>{email}</a>
                                <Email />
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className={style.contactSeparate}>

                <div className={style.contactInfoItem}>
                    <a href={`tel:${phone.short}`}>{phone.full}</a>
                    <Phone />
                </div>

                <div className={style.contactInfoItem}>
                    <a href={`mailto:${email}`}>{email}</a>
                    <Email />
                </div>

            </div>

        </div>
    )
}

export default RealtorCard; 