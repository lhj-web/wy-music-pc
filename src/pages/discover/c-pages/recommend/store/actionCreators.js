import * as actionTypes from './constants';
import { getTopBanners } from 'api/recommend';

const changeTopBanners = res => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.data.banners,
})

export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      console.log(res);
      dispatch(changeTopBanners(res))
    });
  }
}
