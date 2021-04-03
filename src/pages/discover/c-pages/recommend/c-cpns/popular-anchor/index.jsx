import React, { memo } from 'react'

import { popularAuchor } from '../../../../../../common/local-data'

import HJThemeHeaderSmall from 'components/theme-header-small'

import { PopularAuchorWrapper } from './style'

export default memo(function HJPopularAnchor() {
  return (
    <PopularAuchorWrapper>
      <HJThemeHeaderSmall title="热门主播" />
      <div className="radio-list">
        {
          popularAuchor.map((item, index) => {
            return (
              <div className="item" key={item.picUrl}>
                <a href="/abc" className="image">
                  <img src={item.picUrl} alt="" />
                </a>
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="position text-nowrap">{item.position}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </PopularAuchorWrapper>
  )
})
