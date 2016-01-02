import React, { PropTypes } from 'react'
import EmailPropTypes from './PropTypes'

export default function Image(props) {
  return (
    <img src={props.src} width={props.width} height={props.height} style={{
      display: 'block',
      outline: 'none',
      border: 'none',
      textDecoration: 'none',
      ...props.style,
    }}/>
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  style: EmailPropTypes.style,
}
