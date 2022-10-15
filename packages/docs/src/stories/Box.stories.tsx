import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
  argTypes: {
    children: {
      name: 'label',
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
  args: {
    children: 'Testando o elemento Box',
  },
}
