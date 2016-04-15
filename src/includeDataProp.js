export default function (props) {
  const dataProp = {}

  Object.keys(props).forEach(key => {
    if (key.indexOf('data-') > -1) {
      dataProp[key] = props[key]
    }
  })

  return dataProp
}
