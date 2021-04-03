import React, { memo, useEffect, useRef, useState, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getSongDetailAction } from '../store/actionCreators';
import { getSizeImg, formatDate, getPlayUrl } from 'utils/data-format';

import { Slider } from 'antd';

import { PlaybarWrapper, Control, PlayInfo, Operator } from './style';

export default memo(function HJAppPlayerBar() {
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const { currentSong } = useSelector(
    (state) => ({
      currentSong: state.getIn(['player', 'currentSong']),
    }),
    shallowEqual
  );

  const picUrl = (currentSong.al && currentSong.al.picUrl) || '';
  const singerName = (currentSong.ar && currentSong.ar[0].name) || '未知歌手';
  const duration = currentSong.dt || 0;
  const showDuration = formatDate(duration, 'mm:ss');
  const showCurrentTime = formatDate(currentTime, 'mm:ss');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongDetailAction(237481));
  }, [dispatch]);

  useEffect(() => {
    audioRef.current.src = getPlayUrl(currentSong.id);
  }, [currentSong]);

  const audioRef = useRef();

  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const timeUpdate = (e) => {
    if (!isChanging) {
      setCurrentTime(e.target.currentTime * 1000);
      setProgress((currentTime / duration) * 100);
    }
  };

  const sliderChange = useCallback(
    (value) => {
      setIsChanging(true);
      const currentTime = ((value / 100) * duration) / 1000;
      setCurrentTime(currentTime);
      setProgress(value);
    },
    [duration]
  );

  const sliderAfter = useCallback(
    (value) => {
      const currentTime = ((value / 100) * duration) / 1000;
      audioRef.current.currentTime = currentTime;
      setCurrentTime(currentTime * 1000);
      setIsChanging(false);

      if (!isPlaying) {
        playMusic();
      }
    },
    [duration, isPlaying, playMusic]
  );

  return (
    <PlaybarWrapper className='sprite_playbar'>
      <div className='content wrap-v2'>
        <Control isPlaying={isPlaying}>
          <button className='sprite_playbar prev'></button>
          <button
            className='sprite_playbar play'
            onClick={(e) => playMusic()}
          ></button>
          <button className='sprite_playbar next'></button>
        </Control>
        <PlayInfo>
          <div className='image'>
            <a href='/'>
              <img src={getSizeImg(picUrl, 34)} alt='' />
            </a>
          </div>
          <div className='info'>
            <div className='song'>
              <span className='song-name'>{currentSong.name}</span>
              <a href='/' className='singer-name'>
                {singerName}
              </a>
            </div>
            <div className='progress'>
              <Slider
                defaultValue={30}
                value={progress}
                onChange={sliderChange}
                onAfterChange={sliderAfter}
                tooltipVisible={false}
              />
              <div className='time'>
                <span className='now-time'>{showCurrentTime}</span>
                <span className='divider'>/</span>
                <span className='duration'>{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className='left'>
            <button className='sprite_playbar btn favor'></button>
            <button className='sprite_playbar btn share'></button>
          </div>
          <div className='right sprite_playbar'>
            <button className='sprite_playbar btn volume'></button>
            <button className='sprite_playbar btn loop'></button>
            <button className='sprite_playbar btn playlist'></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={timeUpdate} />
    </PlaybarWrapper>
  );
});
