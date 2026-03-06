import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'UI/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane" />
      <Label htmlFor="airplane">Modo avião</Label>
    </div>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <div className="flex items-center justify-between rounded-lg border border-border p-4 w-80">
      <div className="space-y-0.5">
        <Label htmlFor="notifications">Notificações</Label>
        <p className="text-sm text-muted-foreground">
          Receber emails sobre atualizações
        </p>
      </div>
      <Switch id="notifications" />
    </div>
  ),
}
