// ensure base DOM properties are already injected
import 'react-dom'
import DOMProperty from 'react-dom/lib/DOMProperty'

export { DOMProperty as _DOMProperty }

export const emailAttributes = {
  Properties: {
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

  // make React accept some HTML attributes useful to emails
  DOMProperty.injection.injectDOMPropertyConfig(emailAttributes)

  injected = true
}
