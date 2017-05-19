import React  from 'react'
import PropTypes from 'prop-types'
import EmailPropTypes from '../PropTypes'
import includeDataProps from '../includeDataProps'

export default function A(props) {
  return (
    <a {...includeDataProps(props)} href={props.href} target="_blank" style={{
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
