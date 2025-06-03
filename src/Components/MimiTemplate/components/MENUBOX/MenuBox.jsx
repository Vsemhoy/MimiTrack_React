import React, { useContext, useEffect, useState } from 'react';

import './style/menubox.css';
import { Button } from 'antd';

import { BarsOutlined, CloseOutlined, HomeOutlined } from '@ant-design/icons';
import { Link, NavLink } from 'react-router-dom';

const MenuBox = (props) => {

  const buttSize = 'large';

  return (
    <div className={'mi-container mi-bg-base mi-block-menu mi-br-3'}>
      <div className={'mi-flex'}>
       <NavLink to={'/home'}
       className={({ isActive }) => isActive ? 'mi-active' : ''}
       >
          <div className={''}>
          <Button type="text" size={buttSize}>
            <CloseOutlined />

          </Button>
          </div>
        </NavLink>
      </div>
      <div className={'mi-flex'}>
        <NavLink to={'/releases'}
        className={({ isActive }) => isActive ? 'mi-active' : ''}
        >
          <Button type="text" size={buttSize}>
            Релизы
          </Button>
        </NavLink>
        <NavLink to={'/claims'} 
        className={({ isActive }) => isActive ? 'mi-active' : ''}
        >
          <Button type="text" size={buttSize}>
            Заявки
          </Button>
        </NavLink>
        <NavLink to={'/questions'} 
        className={({ isActive }) => isActive ? 'mi-active' : ''}
        >
          <Button type="text" size={buttSize}>
            Вопросы
          </Button>
        </NavLink>
        <NavLink to={'/executor'} 
        className={({ isActive }) => isActive ? 'mi-active' : ''}
        >
          <Button type="text" size={buttSize}>
            Цех
          </Button>
        </NavLink>
        <NavLink to={'/taskup'} 
        className={({ isActive }) => isActive ? 'mi-active' : ''}
        >
          <Button type="text" size={buttSize}>
            Task Up!
          </Button>
        </NavLink>
      </div>
      <div className={'mi-flex'}>
        <NavLink to={'/settings'}
        className={({ isActive }) => isActive ? 'mi-active' : ''}
        >
          <Button type="text" size={buttSize}>
            Настройки
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default MenuBox;