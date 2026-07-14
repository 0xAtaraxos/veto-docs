import type { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import {
  Accordion,
  AccordionGroup,
  Card,
  CardGroup,
  Check,
  Info,
  Note,
  Step,
  Steps,
  Tip,
  Warning,
} from '../components/mintlify-shims'
import '../styles/globals.css'

const mdxComponents = {
  Card,
  CardGroup,
  Steps,
  Step,
  Accordion,
  AccordionGroup,
  Note,
  Tip,
  Warning,
  Info,
  Check,
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={mdxComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}
