import { styled } from '../../styles'
import { Text } from '../Text'

const Root = styled('div')

const Label = styled(Text, {
  color: '$gray200',

  defaultVariants: {
    size: 'xs',
  },
})

const Steps = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--multiStep-steps), 1fr)',
  gap: '$2',
  marginTop: '$1',
})

const Step = styled('div', {
  height: '$1',
  borderRadius: '$px',
  backgroundColor: '$gray600',

  variants: {
    active: {
      true: {
        backgroundColor: '$gray100',
      },
    },
  },
})

export default {
  Root,
  Label,
  Steps,
  Step,
}
