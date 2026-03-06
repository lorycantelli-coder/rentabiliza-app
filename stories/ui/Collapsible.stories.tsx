import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { Button } from '@/components/ui/button'
import { IconChevronDown } from '@tabler/icons-react'

const meta = {
  title: 'UI/Collapsible',
  component: Collapsible,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Collapsible>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Collapsible className="w-80 space-y-2">
      <div className="flex items-center justify-between space-x-4">
        <h4 className="text-sm font-semibold">Detalhes do imóvel</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <IconChevronDown className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 text-sm">
        Informação visível
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-2 text-sm">
          Informação adicional 1
        </div>
        <div className="rounded-md border px-4 py-2 text-sm">
          Informação adicional 2
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
}
