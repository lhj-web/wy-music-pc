import React, { memo, useEffect, useRef } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getNewAlbumAction } from '../../store/actionCreators';

import { Carousel } from 'antd';
import HJThemeHeaderRcm from 'components/theme-header-rcm';
import HJAlbumCover from 'components/album-cover';

import { AlbumWrapper } from './style';

export default memo(function HJNewAlbum() {
  const { newAlbum } = useSelector(
    (state) => ({
      newAlbum: state.getIn(['recommend', 'newAlbum']),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewAlbumAction(10));
  }, [dispatch]);

  const newAlbumRef = useRef();

  return (
    <AlbumWrapper>
      <HJThemeHeaderRcm title='新碟上架' todo='album'></HJThemeHeaderRcm>
      <div className='content'>
        <button
          className='arrow arrow-left sprite_02'
          onClick={(e) => newAlbumRef.current.prev()}
        ></button>
        <div className='album'>
          <Carousel dots={false} ref={newAlbumRef}>
            {[0, 1].map((item, index) => {
              return (
                <div key={item} className='page'>
                  {newAlbum.slice(item * 5, (item + 1) * 5).map((iten) => {
                    return (
                      <HJAlbumCover
                        key={iten.id}
                        info={iten}
                        size={100}
                        width={118}
                        bgp='-570px'
                      ></HJAlbumCover>
                    );
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <button
          className='arrow arrow-right sprite_02'
          onClick={(e) => newAlbumRef.current.next()}
        ></button>
      </div>
    </AlbumWrapper>
  );
});
