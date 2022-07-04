import React, { useState } from 'react';
// import styled from "styled-components";
import { Carousel, Image, Tag, Button, Collapse } from 'antd';

import style from './PresenatationRealtorCard.module.css';

import { ReactComponent as FullScreen } from '../icons/FullScreen.svg';
import { ReactComponent as CarouselArrow } from '../icons/CarouselArrow.svg';
import { ReactComponent as Expand } from '../icons/Expand.svg';


const { Panel } = Collapse;

const Arrow = ({ type, style2, className, onClick }) => (
    <div type={type} className={`${style.carouselArrow} ${type === 'left' ? style.left : style.right}`} onClick={onClick}>
        <CarouselArrow />
    </div>
);


const PresenatationRealtorCard = (props) => {

    const { content } = props;
    const { photos, tags, price, properties, description } = content;

    const [visible, setVisible] = useState(false);
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

    return (

        <div className={style.realtorCardWrapper}>

            <div style={{ display: 'none' }}>
                <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                    {photos.map(p => {
                        return <Image src={p} />;
                    })}
                </Image.PreviewGroup>
            </div>

            <div className={style.realtorCard}>

                <div className={style.mainPart}>
                    <div className={style.photoWrapper}>

                        <div className={style.carouselWrapper}>

                            <Carousel
                                arrows
                                prevArrow={<Arrow type="left" />}
                                nextArrow={<Arrow type="right" />}
                            >

                                {photos.map(p => {
                                    return (
                                        <div>
                                            <img className={style.carouselItem} src={p} />
                                        </div>
                                    )
                                })}

                            </Carousel>

                        </div>

                        <div className={style.fullScreen} onClick={() => setVisible(true)}>
                            <FullScreen />
                        </div>

                    </div>

                    <div className={style.infoWrapper}>
                        <div className={style.tags}>
                            {
                                tags.map(tag => {
                                    return <Tag className={style.tag}>{tag}</Tag>
                                }
                                )
                            }
                        </div>

                        <div className={style.prices}>
                            <h4 className={style.totalPrice}>{price.total.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ")} ₽</h4>
                            <p className={style.priceForM2}>{price.forM2.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ")} ₽/м²</p>
                        </div>


                        <div className={style.properties}>

                            {
                                properties.map(property => {

                                    return (
                                        <div className={style.propertyItemWrapper}>

                                            <div className={style.propertyItem}>
                                                <div className={style.propertyLeft}>
                                                    <p className={style.propertyName}>{property.name}</p>
                                                    <p className={style.propertyValue}>{property.value}</p>
                                                </div>

                                                {property.icon}

                                            </div>

                                        </div>
                                    )
                                })
                            }




                        </div>

                    </div>

                    <Button className={`${style.expandButton} ${isDescriptionOpen ? style.active : ''}`} onClick={() => { setIsDescriptionOpen(!isDescriptionOpen) }}><Expand /></Button>

                </div>



                <>
                    <Collapse className={style.expandWrapper} activeKey={isDescriptionOpen && ['1']} >
                        <Panel className={style.expandContainer} key="1">
                            <p className={style.expandText}>{description}</p>
                        </Panel>
                    </Collapse>
                </>
            </div>

        </div>
    )
}

export default PresenatationRealtorCard; 