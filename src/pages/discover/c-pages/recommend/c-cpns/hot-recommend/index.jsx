import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import HJThemeHeaderRcm from 'components/theme-header-rcm'
import { getHotRecommendsAction } from '../../store/actionCreators'
import HJSongsCover from 'components/songs-cover'

import { HotRecommendWrapper } from './style'

export default memo(function HJHotRecommend() {
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(['recommend', 'hotRecommends'])
  }), shallowEqual)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHotRecommendsAction(8))
  }, [dispatch])
  
  return (
    <HotRecommendWrapper>
      <HJThemeHeaderRcm title="热门推荐" keywords={['华语', '流行', '摇滚', '民谣', '电子']} todo="songs"></HJThemeHeaderRcm>
      <div className="recommend-list">
        {
          hotRecommends.map((item, index) => {
            return (
              <HJSongsCover key={item.id} info={item}/>
            )
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
