import React, { useContext } from 'react';

import './style/menubox.css';
import { StateContext } from '../../../Definitions/Global/ComStateProvider25/ComStateProvider25';
import { Button } from 'antd';
import Her from '../../../HybridEmbeddedRouter/Her';

const MenuBox = (props) => {
  const { state, setState } = useContext(StateContext);

  return (
    <div className={'mi-container mi-bg-base mi-block-menu'}>
      <div className={'mi-flex mi-pa-9'}>MT</div>
      <div className={'mi-flex'}>
        <Her href={'/claims'}>
          <Button type="link" size={'large'}>
            Link
          </Button>
        </Her>
      </div>
      <div className={'mi-flex'}>
        Settings
      </div>
    </div>
  );
};

export default MenuBox;