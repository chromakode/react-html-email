import React from 'react'
import PropTypes from 'prop-types'
import EmailPropTypes from '../PropTypes'
import includeDataProps from '../includeDataProps'

export default function A(props) {
  return (
    <a
      {...includeDataProps(props)}
      download={props.download}
      href={props.href}
      target="_blank"
      style={{
        color: props.color,
        textDecoration: props.textDecoration,
        ...props.style,
      }}
    >
      {props.children}
    </a>
  )
}

A.propTypes = {
  href: PropTypes.string.isRequired,
  download: PropTypes.string,
  color: PropTypes.string,
  textDecoration: PropTypes.string,
  style: EmailPropTypes.style,
  children: PropTypes.node,
}

A.defaultProps = {
  textDecoration: 'underline',
  href: undefined,
  download: undefined,
  color: undefined,
  style: undefined,
  children: undefined,
}
