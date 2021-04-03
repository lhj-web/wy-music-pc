import { request } from './request'

export  function getTopBanners() {
  return request({
    url: '/banner'
  })
}

export function getHotRecommends(limit) {
  return request({
    url: '/personalized',
    params: {
      limit
    }
  })
}

export function getNewAlbum(limit) {
  return request({
    url: '/album/newest',
    params: {
      limit
    }
  })
}

export function getTopList(idx) {
  return request({
    url: '/top/list',
    params: {
      idx
    }
  })
}