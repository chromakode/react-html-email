import React from 'react'

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
  src: React.PropTypes.string.isRequired,
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  style: React.PropTypes.object,
}
