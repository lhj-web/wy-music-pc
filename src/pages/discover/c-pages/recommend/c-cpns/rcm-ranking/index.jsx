import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getTopListAction } from '../../store/actionCreators'

import HJThemeHeaderRcm from 'components/theme-header-rcm'
import HJTopRanking from 'components/top-ranking'

import { RankingWrapper } from './style'

export default memo(function HJRcmRanking() {
  const { upRanking, newRanking, originRanking } = useSelector(state => ({
    upRanking: state.getIn(['recommend', 'upRanking']),
    newRanking: state.getIn(['recommend', 'newRanking']),
    originRanking: state.getIn(['recommend', 'originRanking']),
  }), shallowEqual)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  }, [dispatch])
  return (
    <RankingWrapper>
      <HJThemeHeaderRcm title="榜单" todo="ranking">
      </HJThemeHeaderRcm>
      <div className="tops">
        <HJTopRanking info={upRanking} />
        <HJTopRanking info={newRanking} />
        <HJTopRanking info={originRanking} />
      </div>
    </RankingWrapper>
  )
})
