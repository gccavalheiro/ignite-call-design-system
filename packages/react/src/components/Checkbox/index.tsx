import { ComponentProps } from '@stitches/react'
import { Check } from 'phosphor-react'
import Styled from './styles'

export interface CheckboxProps extends ComponentProps<typeof Styled.Root> {}

export function Checkbox(props: CheckboxProps) {
  return (
    <Styled.Root {...props}>
      <Styled.Indicator asChild>
        <Check weight="bold" />
      </Styled.Indicator>
    </Styled.Root>
  )
}

Checkbox.displayName = 'Checkbox'
