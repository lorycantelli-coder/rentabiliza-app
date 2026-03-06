import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { IconBold, IconItalic, IconUnderline } from '@tabler/icons-react'

const meta = {
  title: 'UI/ToggleGroup',
  component: ToggleGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ToggleGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <IconBold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <IconItalic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <IconUnderline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const Single: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="left">
      <ToggleGroupItem value="left">Esquerda</ToggleGroupItem>
      <ToggleGroupItem value="center">Centro</ToggleGroupItem>
      <ToggleGroupItem value="right">Direita</ToggleGroupItem>
    </ToggleGroup>
  ),
}
