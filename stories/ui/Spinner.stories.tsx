import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Spinner } from '@/components/ui/spinner'

const meta = {
  title: 'UI/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Spinner />,
}

export const Small: Story = {
  render: () => <Spinner className="size-3" />,
}

export const Medium: Story = {
  render: () => <Spinner className="size-5" />,
}

export const Large: Story = {
  render: () => <Spinner className="size-8" />,
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <Spinner className="size-3" />
        <span className="text-xs text-muted-foreground">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner className="size-4" />
        <span className="text-xs text-muted-foreground">Default</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner className="size-6" />
        <span className="text-xs text-muted-foreground">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner className="size-8" />
        <span className="text-xs text-muted-foreground">Large</span>
      </div>
    </div>
  ),
}

export const WithText: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Spinner />
      <span className="text-sm">Loading...</span>
    </div>
  ),
}

export const InButton: Story = {
  render: () => (
    <button className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
      <Spinner className="size-4" />
      Loading...
    </button>
  ),
}

export const Centered: Story = {
  render: () => (
    <div className="flex h-[200px] w-[300px] items-center justify-center rounded-lg border border-border">
      <Spinner />
    </div>
  ),
}

export const CustomColor: Story = {
  render: () => (
    <div className="flex gap-4">
      <Spinner className="text-accent" />
      <Spinner className="text-destructive" />
      <Spinner className="text-muted-foreground" />
    </div>
  ),
}
