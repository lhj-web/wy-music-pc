import React, { memo } from 'react';

import { getSizeImg } from '../../utils/data-format'

import { AlbumWrapper } from './style';

export default memo(function HJAlbumCover(props) {
  const { info, size = 130, width = 153, bgp = '-845px' } = props;

  return (
    <AlbumWrapper size={size} width={width} bgp={bgp}>
      <div className='album-image'>
        <img src={getSizeImg(info.picUrl)} alt='' />
        <a href="/" className="cover sprite_covor"> </a>
      </div>
      <div className="album-info">
        <div className="name">{info.name}</div>
        <div className="artist text-nowrap">{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  );
});
