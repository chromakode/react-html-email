import React, { PropTypes } from 'react'
import EmailPropTypes from '../PropTypes'

export default function A(props) {
  return (
    <a href={props.href} target="_blank" style={{
      color: props.color,
      textDecoration: props.textDecoration,
      ...props.style,
    }}>{props.children}</a>
  )
}

A.propTypes = {
  href: PropTypes.string.isRequired,
  color: PropTypes.string,
  textDecoration: PropTypes.string,
  style: EmailPropTypes.style,
  children: PropTypes.node,
}

A.defaultProps = {
  textDecoration: 'underline',
}
