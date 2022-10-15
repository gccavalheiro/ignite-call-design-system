import Styled from './styles'

import { User } from 'phosphor-react'
import { ComponentProps } from '@stitches/react'

export interface AvatarProps extends ComponentProps<typeof Styled.Image> {}

export function Avatar(props: AvatarProps) {
  return (
    <Styled.Root>
      <Styled.Image {...props} />

      <Styled.Fallback delayMs={600}>
        <User />
      </Styled.Fallback>
    </Styled.Root>
  )
}

Avatar.displayName = 'Avatar'
