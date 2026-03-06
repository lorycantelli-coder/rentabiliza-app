import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { IconCalendar, IconUser, IconSettings } from '@tabler/icons-react'

const meta = {
  title: 'UI/Command',
  component: Command,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Command>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Command className="rounded-lg border">
      <CommandInput placeholder="Digite um comando ou busque..." />
      <CommandList>
        <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
        <CommandGroup heading="Sugestões">
          <CommandItem>
            <IconCalendar className="mr-2 h-4 w-4" />
            Calendário
          </CommandItem>
          <CommandItem>
            <IconUser className="mr-2 h-4 w-4" />
            Perfil
          </CommandItem>
          <CommandItem>
            <IconSettings className="mr-2 h-4 w-4" />
            Configurações
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}
