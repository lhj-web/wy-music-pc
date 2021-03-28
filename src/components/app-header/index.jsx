import React, { memo } from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';

import { HeaderLeft, HeaderWrapper, HeaderRight } from './style';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { headerLinks } from '../../common/local-data';

export default memo(function HJAppHeader() {
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link} exact>
          {item.title}
          <i className='sprite_01 icon'></i>
        </NavLink>
      );
    } else {
      return (
        <a href={item.link} rel='noreferrer' target='_blank'>
          {item.title}
        </a>
      );
    }
  };

  return (
    <HeaderWrapper>
      <div className='content wrap-v1'>
        <HeaderLeft>
          <a href='/' className='logo sprite_01'>
            {' '}
          </a>
          <div className='select-list'>
            {headerLinks.map((item, index) => {
              return (
                <div key={item.title} className={classnames('select-item')}>
                  {showSelectItem(item, index)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            placeholder='音乐/视频/电台/用户'
            prefix={<SearchOutlined />}
            className='search'
          ></Input>
          <button className="center">创作者中心</button>
          <div>登录</div>
        </HeaderRight>
      </div>
      <div className='divider'></div>
    </HeaderWrapper>
  );
});
