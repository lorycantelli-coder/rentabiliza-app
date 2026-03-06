import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from '@/components/ui/button-group'
import { Button } from '@/components/ui/button'
import {
  IconBold,
  IconItalic,
  IconUnderline,
  IconAlignLeft,
  IconAlignCenter,
  IconAlignRight,
} from '@tabler/icons-react'

const meta = {
  title: 'UI/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Left</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Right</Button>
    </ButtonGroup>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline" size="icon">
        <IconBold size={16} />
      </Button>
      <Button variant="outline" size="icon">
        <IconItalic size={16} />
      </Button>
      <Button variant="outline" size="icon">
        <IconUnderline size={16} />
      </Button>
    </ButtonGroup>
  ),
}

export const TextAlignment: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline" size="icon">
        <IconAlignLeft size={16} />
      </Button>
      <Button variant="outline" size="icon">
        <IconAlignCenter size={16} />
      </Button>
      <Button variant="outline" size="icon">
        <IconAlignRight size={16} />
      </Button>
    </ButtonGroup>
  ),
}

export const WithSeparator: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Cut</Button>
      <Button variant="outline">Copy</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">Paste</Button>
    </ButtonGroup>
  ),
}

export const WithText: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Bold</Button>
      <ButtonGroupText>or</ButtonGroupText>
      <Button variant="outline">Italic</Button>
    </ButtonGroup>
  ),
}

export const Mixed: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Previous</Button>
      <Button variant="outline">1</Button>
      <Button variant="outline">2</Button>
      <Button variant="outline">3</Button>
      <Button variant="outline">Next</Button>
    </ButtonGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button variant="outline">Top</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Bottom</Button>
    </ButtonGroup>
  ),
}

export const VerticalWithSeparator: Story = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button variant="outline">Cut</Button>
      <Button variant="outline">Copy</Button>
      <ButtonGroupSeparator orientation="horizontal" />
      <Button variant="outline">Paste</Button>
    </ButtonGroup>
  ),
}
