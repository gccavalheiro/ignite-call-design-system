import { Heading, HeadingProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Heading',
    size: 'md',
    as: 'h2',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'select',
      },
    },
    children: {
      name: 'label',
    },
    as: {
      name: 'custom tag "as"',
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Custom Heading',
    as: 'h2',
  },

  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar com a propriedade `as`',
      },
    },
  },
}
