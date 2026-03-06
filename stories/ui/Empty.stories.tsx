import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from '@/components/ui/empty'
import { Button } from '@/components/ui/button'
import {
  IconInbox,
  IconSearch,
  IconFolderOpen,
  IconUsers,
  IconPlus,
} from '@tabler/icons-react'

const meta = {
  title: 'UI/Empty',
  component: Empty,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Empty>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia>
          <IconInbox className="h-12 w-12 text-muted-foreground" />
        </EmptyMedia>
        <EmptyTitle>No messages</EmptyTitle>
        <EmptyDescription>
          You don't have any messages yet. Start a conversation!
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia>
          <IconFolderOpen className="h-12 w-12 text-muted-foreground" />
        </EmptyMedia>
        <EmptyTitle>No files found</EmptyTitle>
        <EmptyDescription>
          Get started by uploading your first file.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>
          <IconPlus size={16} className="mr-2" />
          Upload File
        </Button>
      </EmptyContent>
    </Empty>
  ),
}

export const SearchResults: Story = {
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia>
          <IconSearch className="h-12 w-12 text-muted-foreground" />
        </EmptyMedia>
        <EmptyTitle>No results found</EmptyTitle>
        <EmptyDescription>
          We couldn't find what you're looking for. Try adjusting your search.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">Clear Search</Button>
      </EmptyContent>
    </Empty>
  ),
}

export const NoUsers: Story = {
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia>
          <IconUsers className="h-12 w-12 text-muted-foreground" />
        </EmptyMedia>
        <EmptyTitle>No team members</EmptyTitle>
        <EmptyDescription>
          Invite your team members to collaborate on this project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <Button>Invite Members</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </EmptyContent>
    </Empty>
  ),
}

export const WithIconVariant: Story = {
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconInbox className="size-4" />
        </EmptyMedia>
        <EmptyTitle>Empty inbox</EmptyTitle>
        <EmptyDescription>All caught up!</EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
}

export const InCard: Story = {
  render: () => (
    <div className="w-[400px] rounded-lg border border-border bg-card">
      <div className="border-b border-border p-4">
        <h3 className="font-semibold">Recent Activity</h3>
      </div>
      <Empty>
        <EmptyHeader>
          <EmptyMedia>
            <IconInbox className="h-10 w-10 text-muted-foreground" />
          </EmptyMedia>
          <EmptyTitle>No activity yet</EmptyTitle>
          <EmptyDescription>
            Activity will appear here when you start using the app.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </div>
  ),
}
