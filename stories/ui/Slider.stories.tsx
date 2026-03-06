import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Slider } from '@/components/ui/slider'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'UI/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <Label>Volume</Label>
      <Slider defaultValue={[50]} max={100} step={1} />
    </div>
  ),
}

export const Range: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <Label>Faixa de preço: R$ 100 - R$ 500</Label>
      <Slider defaultValue={[100, 500]} max={1000} step={10} />
    </div>
  ),
}
