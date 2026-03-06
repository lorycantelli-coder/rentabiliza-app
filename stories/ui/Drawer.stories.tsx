import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'UI/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="bg-primary text-black font-bold uppercase">
          Abrir Drawer
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Configurações</DrawerTitle>
          <DrawerDescription>
            Faça mudanças nas suas configurações aqui.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p className="text-muted-foreground">
            Conteúdo do drawer vai aqui. Perfeito para menus laterais.
          </p>
        </div>
        <DrawerFooter>
          <Button className="bg-primary text-black font-bold hover:brightness-110">
            Salvar
          </Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}
