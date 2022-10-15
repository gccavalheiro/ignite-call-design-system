import { styled } from '../../styles'
import * as Avatar from '@radix-ui/react-avatar'

const Root = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  width: '$12',
  height: '$12',
  overflow: 'hidden',
})

const Image = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

const Fallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray600',
  color: '$white',

  svg: {
    width: '$6',
    height: '$6',
  },
})

export default {
  Root,
  Image,
  Fallback,
}
