import React from 'react'

export default function Span(props) {
  return (
    <span style={{
      fontFamily: props.fontFamily,
      fontSize: props.fontSize,
      fontWeight: props.fontWeight,
      lineHeight: (props.lineHeight !== undefined ? props.lineHeight : props.fontSize) + 'px',
      color: props.color,
      ...props.style,
    }}>{props.children}</span>
  )
}

Span.propTypes = {
  fontFamily: React.PropTypes.string,
  fontSize: React.PropTypes.number,
  fontWeight: React.PropTypes.string,
  lineHeight: React.PropTypes.number,
  color: React.PropTypes.string,
  style: React.PropTypes.object,
  children: React.PropTypes.node,
}

Span.defaultProps = {
  fontFamily: 'sans-serif',
  fontSize: 14,
  color: '#000',
}
