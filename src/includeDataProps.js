export default function (props) {
  const dataProps = {}

  Object.keys(props).forEach((key) => {
    if (/^data-/.test(key)) {
      dataProps[key] = props[key]
    }
  })

  return dataProps
}
