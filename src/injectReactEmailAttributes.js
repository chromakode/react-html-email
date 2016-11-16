// ensure base DOM properties are already injected
import 'react-dom'
import DOMProperty from 'react-dom/lib/DOMProperty'

export const emailAttributes = {
  Properties: {
    'xmlns': 0,
    'align': 0,
    'valign': 0,
    'bgcolor': 0,
    'border': 0,
  },
}

let injected = false

export default function injectReactEmailAttributes() {
  if (injected) {
    return
  }

  if (DOMProperty.properties.hasOwnProperty('xmlns')) {
    // already exists in React 15.3.0
    delete emailAttributes.Properties.xmlns
  }

  // make React accept some HTML attributes useful to emails
  DOMProperty.injection.injectDOMPropertyConfig(emailAttributes)

  injected = true
}
