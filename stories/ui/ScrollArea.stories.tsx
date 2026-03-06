import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

const meta = {
  title: 'UI/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

const tags = Array.from({ length: 50 }).map(
  (_, i) => `Tag ${i + 1}`
)

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border border-border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border border-border">
      <div className="flex w-max space-x-4 p-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="h-32 w-32 shrink-0 rounded-md bg-card border border-border flex items-center justify-center"
          >
            Item {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}

export const Both: Story = {
  render: () => (
    <ScrollArea className="h-96 w-96 rounded-md border border-border">
      <div className="p-4">
        {Array.from({ length: 20 }).map((_, row) => (
          <div key={row} className="mb-4">
            <h3 className="mb-2 font-semibold">Row {row + 1}</h3>
            <div className="flex gap-4">
              {Array.from({ length: 20 }).map((_, col) => (
                <div
                  key={col}
                  className="h-24 w-24 shrink-0 rounded-md bg-card border border-border flex items-center justify-center text-sm"
                >
                  {row + 1},{col + 1}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}
