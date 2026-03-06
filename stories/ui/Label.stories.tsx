import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

const meta = {
  title: 'UI/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="seu@email.com" />
    </div>
  ),
}

export const Required: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="name">
        Nome completo <span className="text-destructive">*</span>
      </Label>
      <Input id="name" placeholder="Digite seu nome" required />
    </div>
  ),
}
