import { DOMProperty } from 'react/lib/ReactInjection'

export const emailAttributes = {
  Properties: {
    'xmlns': DOMProperty.MUST_USE_ATTRIBUTE,
    'align': DOMProperty.MUST_USE_ATTRIBUTE,
    'valign': DOMProperty.MUST_USE_ATTRIBUTE,
    'bgcolor': DOMProperty.MUST_USE_ATTRIBUTE,
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
