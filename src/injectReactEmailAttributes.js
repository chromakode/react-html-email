import { DOMProperty } from 'react/lib/ReactInjection'

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

  // make React accept some HTML attributes useful to emails
  DOMProperty.injectDOMPropertyConfig(emailAttributes)

  injected = true
}
