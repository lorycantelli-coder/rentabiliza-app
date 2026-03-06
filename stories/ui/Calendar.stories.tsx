import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Calendar } from '@/components/ui/calendar'

const meta = {
  title: 'UI/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Calendar mode="single" className="rounded-md border" />,
}
