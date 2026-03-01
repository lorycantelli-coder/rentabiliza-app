import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { IconAlertCircle, IconInfoCircle } from '@tabler/icons-react'

const meta = {
  title: 'UI/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
    },
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Alert className="w-[400px]">
      <IconInfoCircle className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="w-[400px]">
      <IconAlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
}

export const Simple: Story = {
  render: () => (
    <Alert className="w-[400px]">
      <AlertDescription>
        This is a simple alert without a title.
      </AlertDescription>
    </Alert>
  ),
}
