import { Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  argTypes: {
    title: {
      type: 'string'
    }
  }
} as Meta

interface BasicArgs {
  title: string
  description: string
}

export const Basic = (args: BasicArgs) => <Main {...args} />
