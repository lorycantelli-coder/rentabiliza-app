import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemGroup,
  ItemSeparator,
} from '@/components/ui/item'
import {
  IconFile,
  IconFolder,
  IconImage,
  IconMusic,
  IconVideo,
  IconChevronRight,
  IconDots,
  IconStar,
} from '@tabler/icons-react'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'UI/Item',
  component: Item,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Item>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Item className="w-[350px]">
      <ItemMedia variant="icon">
        <IconFile size={20} />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Document.pdf</ItemTitle>
        <ItemDescription>2.4 MB • Modified 2 hours ago</ItemDescription>
      </ItemContent>
    </Item>
  ),
}

export const Clickable: Story = {
  render: () => (
    <Item
      render={(props) => <a {...props} href="#" />}
      className="w-[350px]"
    >
      <ItemMedia variant="icon">
        <IconFolder size={20} />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Projects</ItemTitle>
        <ItemDescription>24 items</ItemDescription>
      </ItemContent>
      <ItemActions>
        <IconChevronRight size={16} className="text-muted-foreground" />
      </ItemActions>
    </Item>
  ),
}

export const WithActions: Story = {
  render: () => (
    <Item className="w-[350px]">
      <ItemMedia variant="icon">
        <IconImage size={20} />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>vacation-photo.jpg</ItemTitle>
        <ItemDescription>1.8 MB • Today at 3:42 PM</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="ghost" size="icon">
          <IconDots size={16} />
        </Button>
      </ItemActions>
    </Item>
  ),
}

export const WithImage: Story = {
  render: () => (
    <Item className="w-[350px]">
      <ItemMedia variant="image">
        <div className="bg-accent flex items-center justify-center size-full">
          <IconImage className="size-6 text-accent-foreground" />
        </div>
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Summer Vacation 2024</ItemTitle>
        <ItemDescription>120 photos • 45 MB</ItemDescription>
      </ItemContent>
    </Item>
  ),
}

export const List: Story = {
  render: () => (
    <ItemGroup className="w-[350px] rounded-lg border border-border p-2">
      <Item render={(props) => <a {...props} href="#" />}>
        <ItemMedia variant="icon">
          <IconFolder size={20} />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Documents</ItemTitle>
          <ItemDescription>42 files</ItemDescription>
        </ItemContent>
        <ItemActions>
          <IconChevronRight size={16} className="text-muted-foreground" />
        </ItemActions>
      </Item>
      <Item render={(props) => <a {...props} href="#" />}>
        <ItemMedia variant="icon">
          <IconImage size={20} />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Photos</ItemTitle>
          <ItemDescription>1,234 files</ItemDescription>
        </ItemContent>
        <ItemActions>
          <IconChevronRight size={16} className="text-muted-foreground" />
        </ItemActions>
      </Item>
      <Item render={(props) => <a {...props} href="#" />}>
        <ItemMedia variant="icon">
          <IconMusic size={20} />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Music</ItemTitle>
          <ItemDescription>87 files</ItemDescription>
        </ItemContent>
        <ItemActions>
          <IconChevronRight size={16} className="text-muted-foreground" />
        </ItemActions>
      </Item>
      <Item render={(props) => <a {...props} href="#" />}>
        <ItemMedia variant="icon">
          <IconVideo size={20} />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Videos</ItemTitle>
          <ItemDescription>23 files</ItemDescription>
        </ItemContent>
        <ItemActions>
          <IconChevronRight size={16} className="text-muted-foreground" />
        </ItemActions>
      </Item>
    </ItemGroup>
  ),
}

export const WithSeparator: Story = {
  render: () => (
    <ItemGroup className="w-[350px] rounded-lg border border-border p-2">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <IconFile size={20} />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Document 1.pdf</ItemTitle>
          <ItemDescription>2.4 MB</ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />
      <Item variant="outline">
        <ItemMedia variant="icon">
          <IconFile size={20} />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Document 2.pdf</ItemTitle>
          <ItemDescription>1.8 MB</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
}

export const SmallSize: Story = {
  render: () => (
    <Item size="sm" className="w-[300px]">
      <ItemMedia variant="icon">
        <IconFile size={16} />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>readme.md</ItemTitle>
        <ItemDescription>Updated yesterday</ItemDescription>
      </ItemContent>
    </Item>
  ),
}

export const ExtraSmall: Story = {
  render: () => (
    <Item size="xs" className="w-[250px]">
      <ItemMedia variant="icon">
        <IconFile size={14} />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>config.json</ItemTitle>
      </ItemContent>
    </Item>
  ),
}
