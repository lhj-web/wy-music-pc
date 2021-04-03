import * as actionTypes from './constants';

import { getTopBanners, getHotRecommends, getNewAlbum, getTopList } from 'api/recommend';

const changeTopBannersAction = res => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.data.banners,
})

const changeHotRecommendsAction = res => ({
  type: actionTypes.CHANGE_HOT_RECOMMENDS,
  hotRecommends: res.data.result
})

const changeNewAlbumAction = res => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbum: res.data.albums
})

const changeUpRankingAction = res => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.data.playlist
})

const changeNewRankingAction = res => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.data.playlist
})

const changeOriginRankingAction = res => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.data.playlist
})


export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannersAction(res))
    });
  }
}

export const getHotRecommendsAction = (limit) => {
  return (dispatch) => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommendsAction(res))
    })
  }
}

export const getNewAlbumAction = (limit) => {
  return (dispatch) => {
    getNewAlbum(limit).then(res => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}

export const getTopListAction = (idx) => {
  return (dispatch) => {
    getTopList(idx).then(res => {
      switch (idx) {
        case 0:
          dispatch(changeUpRankingAction(res))
          break;
        case 2:
          dispatch(changeNewRankingAction(res))
          break
        case 3: 
        dispatch(changeOriginRankingAction(res))
        break
        default:
          break;
      }
    })
  }
}