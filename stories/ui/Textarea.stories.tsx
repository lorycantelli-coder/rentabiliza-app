import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="message">Mensagem</Label>
      <Textarea
        id="message"
        placeholder="Digite sua mensagem aqui..."
        rows={4}
      />
    </div>
  ),
}

export const WithDefaultValue: Story = {
  render: () => (
    <Textarea
      defaultValue="Este é um texto padrão que pode ser editado."
      rows={6}
    />
  ),
}
