import { useMDXComponents as getNextraComponents } from 'nextra/mdx'
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
} from './components/mintlify-shims'

const shims = {
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

export function useMDXComponents(components?: Record<string, unknown>) {
  return getNextraComponents({
    ...shims,
    ...components,
  })
}
