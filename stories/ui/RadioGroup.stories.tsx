import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'UI/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option1">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="option1" />
        <Label htmlFor="option1">Opção 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option2" id="option2" />
        <Label htmlFor="option2">Opção 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option3" id="option3" />
        <Label htmlFor="option3">Opção 3</Label>
      </div>
    </RadioGroup>
  ),
}

export const PlanSelection: Story = {
  render: () => (
    <div className="space-y-3">
      <Label>Escolha seu plano:</Label>
      <RadioGroup defaultValue="premium" className="space-y-2">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="basic" id="basic" />
          <Label htmlFor="basic" className="font-normal">
            Básico - R$ 97/mês
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="premium" id="premium" />
          <Label htmlFor="premium" className="font-bold text-primary">
            Premium - R$ 297/mês
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="enterprise" id="enterprise" />
          <Label htmlFor="enterprise" className="font-normal">
            Enterprise - Sob consulta
          </Label>
        </div>
      </RadioGroup>
    </div>
  ),
}
