import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Progress } from '@/components/ui/progress'

const meta = {
  title: 'UI/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Upload em progresso</span>
          <span className="text-primary">60%</span>
        </div>
        <Progress value={60} />
      </div>
    </div>
  ),
}

export const Complete: Story = {
  render: () => (
    <div className="w-80 space-y-2">
      <div className="flex justify-between text-sm">
        <span>Concluído</span>
        <span className="text-primary">100%</span>
      </div>
      <Progress value={100} />
    </div>
  ),
}
