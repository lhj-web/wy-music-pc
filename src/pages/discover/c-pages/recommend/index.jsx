import React, { memo } from 'react';

import HJTopBanners from './c-cpns/topBanners';
import HJHotRecommend from './c-cpns/hot-recommend'
import HJRcmRanking from './c-cpns/rcm-ranking'
import HJNewAlbum from './c-cpns/new-album'
import HJPopularAnchor from './c-cpns/popular-anchor'

import { RecommendWrapper, Content, RecommendLeft, RecommendRight } from './style';

function HJRecommend(props) {
  //  const { getBanners, topBanners } = props

  return (
    <RecommendWrapper>
      <HJTopBanners />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HJHotRecommend />
          <HJNewAlbum />
          <HJRcmRanking />
        </RecommendLeft>
        <RecommendRight>
          <HJPopularAnchor></HJPopularAnchor>
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  );
}

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners,
// })

// const mapDispatchToProps = dispatch => ({
//   getBanners() {
//     dispatch(getTopBannerAction())
//   }
// })

export default memo(HJRecommend);
