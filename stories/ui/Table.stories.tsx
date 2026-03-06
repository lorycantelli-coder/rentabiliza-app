import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

const meta = {
  title: 'UI/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Table className="w-full">
      <TableCaption>Lista de leilões recentes</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Imóvel</TableHead>
          <TableHead>Localização</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Valor</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Casa 3Q</TableCell>
          <TableCell>São Paulo - SP</TableCell>
          <TableCell>
            <Badge className="bg-primary text-black">Ativo</Badge>
          </TableCell>
          <TableCell className="text-right">R$ 450.000</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Apartamento 2Q</TableCell>
          <TableCell>Rio de Janeiro - RJ</TableCell>
          <TableCell>
            <Badge variant="secondary">Encerrado</Badge>
          </TableCell>
          <TableCell className="text-right">R$ 320.000</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}
