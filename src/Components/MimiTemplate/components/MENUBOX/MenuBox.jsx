import React, { useContext, useEffect, useState } from 'react';

import './style/menubox.css';
import { StateContext } from '../../../Definitions/Global/ComStateProvider25/ComStateProvider25';
import { Button } from 'antd';
import Her from '../../../HybridEmbeddedRouter/Her';
import { BarsOutlined, HomeOutlined } from '@ant-design/icons';

const MenuBox = (props) => {
  const { state, setState } = useContext(StateContext);

  const [currentLocation, setCurrentLocation] = useState('');

  const buttSize = 'large';

  useEffect(()=>{
    setCurrentLocation(state.location);
  },[state.location])

  return (
    <div className={'mi-container mi-bg-base mi-block-menu mi-br-9'}>
      <div className={'mi-flex'}>
        <Her href={'home'}>
          <div className={'mi-pa-9'}>
            <HomeOutlined />
          </div>
        </Her>
      </div>
      <div className={'mi-flex'}>
        <Her href={'releases'} location={'releases'}>
          <Button type="link" size={buttSize}>
            Релизы
          </Button>
        </Her>
        <Her href={'claims'} location={'claims'}>
          <Button type="link" size={buttSize}>
            Заявки
          </Button>
        </Her>
        <Her href={'questions'}  location={'questions'}>
          <Button type="link" size={buttSize}>
            Вопросы
          </Button>
        </Her>
        <Her href={'executor'} location={'executor'}>
          <Button type="link" size={buttSize}>
            Цех
          </Button>
        </Her>
      </div>
      <div className={'mi-flex'}>
        <Her href={'settings'} location={'settings'}>
          <Button type="link" size={buttSize}>
            Настройки
          </Button>
        </Her>
      </div>
    </div>
  );
};

export default MenuBox;