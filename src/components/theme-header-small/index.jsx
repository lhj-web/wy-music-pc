import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { HeaderWrapper } from './style'

const HJThemeHeaderSmall = memo(function(props) {
  const { title, more } = props
  
  return (
    <HeaderWrapper>
      <h3>{title}</h3>
      <a href="/">{more}</a>
    </HeaderWrapper>
  )
})

HJThemeHeaderSmall.defaultProps = {
  
}

HJThemeHeaderSmall.propTypes = {
  title: PropTypes.string.isRequired,
  more: PropTypes.string
}

export default HJThemeHeaderSmall                   