import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Separator } from '@/components/ui/separator'

const meta = {
  title: 'UI/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div>
        <h3 className="text-lg font-medium">Seção 1</h3>
        <p className="text-sm text-muted-foreground">Conteúdo da primeira seção</p>
      </div>
      <Separator />
      <div>
        <h3 className="text-lg font-medium">Seção 2</h3>
        <p className="text-sm text-muted-foreground">Conteúdo da segunda seção</p>
      </div>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex h-20 items-center space-x-4">
      <div className="text-sm">Menu 1</div>
      <Separator orientation="vertical" />
      <div className="text-sm">Menu 2</div>
      <Separator orientation="vertical" />
      <div className="text-sm">Menu 3</div>
    </div>
  ),
}
