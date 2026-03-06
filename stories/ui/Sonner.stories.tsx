import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'UI/Sonner',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Success: Story = {
  render: () => (
    <Button
      className="bg-primary text-black font-bold"
      onClick={() => toast.success('Operação realizada com sucesso!')}
    >
      Mostrar Toast Success
    </Button>
  ),
}

export const Error: Story = {
  render: () => (
    <Button
      variant="destructive"
      onClick={() => toast.error('Erro ao processar a operação')}
    >
      Mostrar Toast Error
    </Button>
  ),
}

export const Info: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => toast.info('Informação importante')}
    >
      Mostrar Toast Info
    </Button>
  ),
}
