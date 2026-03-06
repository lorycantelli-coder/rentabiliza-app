import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Kbd, KbdGroup } from '@/components/ui/kbd'

const meta = {
  title: 'UI/Kbd',
  component: Kbd,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Kbd>K</Kbd>,
}

export const CommandKey: Story = {
  render: () => (
    <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  ),
}

export const ControlShortcut: Story = {
  render: () => (
    <KbdGroup>
      <Kbd>Ctrl</Kbd>
      <Kbd>C</Kbd>
    </KbdGroup>
  ),
}

export const MultipleKeys: Story = {
  render: () => (
    <div className="space-y-3">
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>Shift</Kbd>
        <Kbd>P</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>Alt</Kbd>
        <Kbd>Del</Kbd>
      </KbdGroup>
    </div>
  ),
}

export const ArrowKeys: Story = {
  render: () => (
    <div className="flex gap-2">
      <Kbd>↑</Kbd>
      <Kbd>↓</Kbd>
      <Kbd>←</Kbd>
      <Kbd>→</Kbd>
    </div>
  ),
}

export const FunctionKeys: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Kbd>F1</Kbd>
      <Kbd>F2</Kbd>
      <Kbd>F3</Kbd>
      <Kbd>F4</Kbd>
      <Kbd>F5</Kbd>
      <Kbd>F6</Kbd>
      <Kbd>F7</Kbd>
      <Kbd>F8</Kbd>
      <Kbd>F9</Kbd>
      <Kbd>F10</Kbd>
      <Kbd>F11</Kbd>
      <Kbd>F12</Kbd>
    </div>
  ),
}

export const SpecialKeys: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Kbd>Esc</Kbd>
      <Kbd>Tab</Kbd>
      <Kbd>Space</Kbd>
      <Kbd>Enter</Kbd>
      <Kbd>Backspace</Kbd>
      <Kbd>Delete</Kbd>
    </div>
  ),
}

export const InText: Story = {
  render: () => (
    <p className="text-sm">
      Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to open the command palette
    </p>
  ),
}

export const ShortcutsList: Story = {
  render: () => (
    <div className="w-[300px] space-y-2 text-sm">
      <div className="flex items-center justify-between">
        <span>Open command palette</span>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center justify-between">
        <span>Search</span>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>F</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center justify-between">
        <span>New tab</span>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>T</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center justify-between">
        <span>Close tab</span>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>W</Kbd>
        </KbdGroup>
      </div>
    </div>
  ),
}
