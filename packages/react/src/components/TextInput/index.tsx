import { ComponentProps } from 'react'
import Styled from './styles'

export interface TextInputProps extends ComponentProps<typeof Styled.Input> {
  prefix?: string
}

export function TextInput({ prefix, ...rest }: TextInputProps) {
  return (
    <Styled.Root>
      {!!prefix && <Styled.Prefix>{prefix}</Styled.Prefix>}
      <Styled.Input {...rest} />
    </Styled.Root>
  )
}

TextInput.displayName = 'TextInput'
