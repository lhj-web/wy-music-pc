import React, { memo } from 'react';

import { getSizeImg } from '../../utils/data-format';

import { TopRankingWrapper } from './style';

export default memo(function HJTopRanking(props) {
  const { info } = props;
  const { tracks = [] } = info;

  return (
    <TopRankingWrapper>
      <div className='header'>
        <div className='image'>
          <img src={getSizeImg(info.coverImgUrl, 80)} alt='' />
          <a href='/' className='image_cover'>
            {' '}
          </a>
        </div>
        <div className='info'>
          <a href='/'>{info.name}</a>
          <div>
            <button className='btn play sprite_02'></button>
            <button className='btn favor sprite_02'></button>
          </div>
        </div>
      </div>
      <div className='list'>
        {tracks.slice(0, 10).map((item, index) => {
          return (
            <div key={item.id} className='list-item'>
              <div className='rank'>{index + 1}</div>
              <div className='info'>
                <div className='name text-nowrap'>{item.name}</div>
                <div className='operate'>
                  <button className='btn sprite_02 play'></button>
                  <button className='btn sprite_icon2 addto'></button>
                  <button className='btn sprite_02 favor'></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className='footer'>
        <a href="/">查看全部&gt;</a>
      </div>
    </TopRankingWrapper>
  );
});
