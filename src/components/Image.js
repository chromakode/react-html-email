import React, { PropTypes } from 'react'
import EmailPropTypes from '../PropTypes'
import includeDataProps from '../includeDataProps'

export default function Image(props) {
  return (
    <img {...includeDataProps(props)} alt={props.alt} src={props.src} width={props.width} height={props.height} style={{
      display: 'block',
      outline: 'none',
      border: 'none',
      textDecoration: 'none',
      ...props.style,
    }}/>
  )
}

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  style: EmailPropTypes.style,
}

Image.defaultProps = {
  height: 1,
  width: 1,
}
