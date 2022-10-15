import { Box, Text, TextArea, TextAreaProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/TextAreaInput',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observações</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Digite suas observações',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
