

declare module 'react-html-email' {
  import * as react from 'react'

  export type FunctionalComponent<P> = (props: P) => JSX.Element

  export function renderEmail(emailComponent: JSX.Element): string

  export const Email: FunctionalComponent<any>
  export const Item: FunctionalComponent<any>
  export const Image: FunctionalComponent<any>
  export const Span: FunctionalComponent<any>
  export const Box: FunctionalComponent<any>
  export const A: FunctionalComponent<any>
}
