import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/ui/input-group'
import { IconSearch, IconMail, IconLock, IconUser } from '@tabler/icons-react'

const meta = {
  title: 'UI/InputGroup',
  component: InputGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputGroup>

export default meta
type Story = StoryObj<typeof meta>

export const WithLeftAddon: Story = {
  render: () => (
    <InputGroup className="w-[300px]">
      <InputGroupAddon align="inline-start">
        <IconUser size={16} />
      </InputGroupAddon>
      <InputGroupInput placeholder="Username" />
    </InputGroup>
  ),
}

export const WithRightAddon: Story = {
  render: () => (
    <InputGroup className="w-[300px]">
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon align="inline-end">
        <IconSearch size={16} />
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const WithBothAddons: Story = {
  render: () => (
    <InputGroup className="w-[300px]">
      <InputGroupAddon align="inline-start">
        <IconMail size={16} />
      </InputGroupAddon>
      <InputGroupInput placeholder="Email" type="email" />
      <InputGroupAddon align="inline-end">
        <InputGroupText>@example.com</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const WithButton: Story = {
  render: () => (
    <InputGroup className="w-[350px]">
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon align="inline-end">
        <InputGroupButton>Search</InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const WithLeftButton: Story = {
  render: () => (
    <InputGroup className="w-[350px]">
      <InputGroupAddon align="inline-start">
        <InputGroupButton>https://</InputGroupButton>
      </InputGroupAddon>
      <InputGroupInput placeholder="example.com" />
    </InputGroup>
  ),
}

export const PasswordInput: Story = {
  render: () => (
    <InputGroup className="w-[300px]">
      <InputGroupAddon align="inline-start">
        <IconLock size={16} />
      </InputGroupAddon>
      <InputGroupInput placeholder="Password" type="password" />
    </InputGroup>
  ),
}

export const PriceInput: Story = {
  render: () => (
    <InputGroup className="w-[200px]">
      <InputGroupAddon align="inline-start">
        <InputGroupText>$</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="0.00" type="number" />
      <InputGroupAddon align="inline-end">
        <InputGroupText>USD</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const URLInput: Story = {
  render: () => (
    <InputGroup className="w-[400px]">
      <InputGroupAddon align="inline-start">
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="www.example.com" />
      <InputGroupAddon align="inline-end">
        <InputGroupText>.com</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const WithTextarea: Story = {
  render: () => (
    <InputGroup className="w-[400px]">
      <InputGroupTextarea placeholder="Enter your message..." rows={4} />
      <InputGroupAddon align="block-end">
        <InputGroupButton>Send</InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const WithTopAddon: Story = {
  render: () => (
    <InputGroup className="w-[300px]">
      <InputGroupAddon align="block-start">
        <InputGroupText>Email</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="your@email.com" type="email" />
    </InputGroup>
  ),
}

export const SearchWithIcon: Story = {
  render: () => (
    <InputGroup className="w-[300px]">
      <InputGroupAddon align="inline-start">
        <IconSearch size={16} />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon align="inline-end">
        <InputGroupButton size="icon-xs">
          <IconSearch size={14} />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
}
