import React from 'react'

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
  href: React.PropTypes.string.isRequired,
  color: React.PropTypes.string,
  textDecoration: React.PropTypes.string,
  style: React.PropTypes.object,
  children: React.PropTypes.node,
}

A.defaultProps = {
  textDecoration: 'underline',
}
