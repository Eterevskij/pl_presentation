import React from 'react';
import 'antd/dist/antd.css';
import './App.css';


import home1 from './img/homePhotos/1.jpg';
import home2 from './img/homePhotos/2.jpg';
import home3 from './img/homePhotos/3.jpg';
import home4 from './img/homePhotos/4.jpg';

import realtor from './img/User.jpg';


import { ReactComponent as Floor } from './icons/Floor.svg';
import { ReactComponent as Kitchen } from './icons/Kitchen.svg';
import { ReactComponent as LiveS } from './icons/LiveS.svg';
import { ReactComponent as WallMaterial } from './icons/WallMaterial.svg';
import { ReactComponent as Rooms } from './icons/Rooms.svg';
import { ReactComponent as TotalS } from './icons/TotalS.svg';

import Presentation from './components/Presentation';


const cards = [{
  photos: [home1, home2, home3, home4],
  tags: ['Квартира', 'Лот #822010'],
  price: { total: 4780000, forM2: 236559 },
  description: 'Продается большая, уютная 2к.кв. в центре города с лоджией (выход из кухни). Высокий первый этаж, спокойное, тихое место. В шаговой доступности имеется абсолютно все: торговые центры, магазины, сбербанк, почта, остановки общественного транспорта. Подходит под ипотеку, материнский капитал и т.д. Поможем с одобрением ипотеки и сопроводим сделку. Один взрослый собственник, без обременений и долгов. Отличный вариант, заезжай и живи!!! Звоните, покажем в удобное для вас время!',
  properties: [
    { name: 'Комнат', value: '2 комн.', icon: <Rooms /> },
    { name: 'Общая площадь', value: '38 м2', icon: <TotalS /> },
    { name: 'Жилая площадь', value: '28 м2', icon: <LiveS /> },
    { name: 'Кухня', value: '12 м2', icon: <Kitchen /> },
    { name: 'Этаж', value: '5 из 9', icon: <Floor /> },
    { name: 'Материал стен', value: 'Панельный', icon: <WallMaterial /> },
  ]
}]

const realtorInfo = {
  name: 'Гущин Данил',
  photo: realtor,
  phone: {short: '+79604684073', full: '+7 (960) 468-40-73'},
  email: 'danilgushchin1@gmail.com',
  totalAdsNum: 9
}

const city  = 'Санкт-Петербурге';


function App() {
  return (<div className="App" >
    <div className="container" >
      <Presentation cards={cards} realtorInfo={realtorInfo} city={city} />
    </div> </div>
  );
}

export default App;