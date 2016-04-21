export default function (props) {
  const dataProps = {}

  Object.keys(props).forEach(key => {
    if (key.indexOf('data-') > -1) {
      dataProps[key] = props[key]
    }
  })

  return dataProps
}
