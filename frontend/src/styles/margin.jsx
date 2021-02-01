import React from 'react'

import styled from 'styled-components'

const HorizontalMargin = styled.div`
  display: flex;
  width: ${({ margin }) => margin};
`
const VerticalMargin = styled.div`
  display: flex;
  height: ${({ margin }) => margin};
`
export function Margin (props) {
  if (props.direction === 'horizontal') return <HorizontalMargin {...props} />
  else {
    return <VerticalMargin {...props} />
  }
}

Margin.defaultProps = {
  direction: 'horizontal'
}
