import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { AspectRatio } from '@/components/ui/aspect-ratio'

const meta = {
  title: 'UI/AspectRatio',
  component: AspectRatio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AspectRatio>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-80">
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
    </div>
  ),
}

export const Square: Story = {
  render: () => (
    <div className="w-80">
      <AspectRatio ratio={1 / 1}>
        <div className="flex h-full items-center justify-center rounded-md bg-primary/20 text-primary">
          1:1 Ratio
        </div>
      </AspectRatio>
    </div>
  ),
}
