import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Toggle } from '@/components/ui/toggle'
import { IconBold, IconItalic, IconUnderline } from '@tabler/icons-react'

const meta = {
  title: 'UI/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Toggle aria-label="Toggle bold">
      <IconBold className="h-4 w-4" />
    </Toggle>
  ),
}

export const Group: Story = {
  render: () => (
    <div className="flex gap-2">
      <Toggle aria-label="Toggle bold">
        <IconBold className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle italic">
        <IconItalic className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle underline">
        <IconUnderline className="h-4 w-4" />
      </Toggle>
    </div>
  ),
}
