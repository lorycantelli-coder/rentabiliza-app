import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the card content area. You can put any content here.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
}

export const WithBadge: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Notification</CardTitle>
        <CardDescription>You have new updates</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Check out the latest features and improvements.</p>
      </CardContent>
      <CardFooter className="justify-between">
        <Badge variant="secondary">New</Badge>
        <Button>View Details</Button>
      </CardFooter>
    </Card>
  ),
}

export const Simple: Story = {
  render: () => (
    <Card className="w-[400px] p-6">
      <h3 className="text-lg font-semibold mb-2">Simple Card</h3>
      <p className="text-sm text-muted-foreground">
        This is a simple card without header and footer sections.
      </p>
    </Card>
  ),
}

export const WithImage: Story = {
  render: () => (
    <Card className="w-[400px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1604076850742-4c7221f3101b?w=400&h=200&fit=crop"
        alt="Card header"
        className="w-full h-48 object-cover"
      />
      <CardHeader>
        <CardTitle>Beautiful Landscape</CardTitle>
        <CardDescription>Captured in Iceland</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">A stunning view of nature's beauty.</p>
      </CardContent>
    </Card>
  ),
}
