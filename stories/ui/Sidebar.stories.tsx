import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarInset,
} from '@/components/ui/sidebar'
import {
  IconHome,
  IconInbox,
  IconCalendar,
  IconSearch,
  IconSettings,
} from '@tabler/icons-react'

const meta = {
  title: 'UI/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

const items = [
  {
    title: 'Home',
    url: '#',
    icon: IconHome,
  },
  {
    title: 'Inbox',
    url: '#',
    icon: IconInbox,
  },
  {
    title: 'Calendar',
    url: '#',
    icon: IconCalendar,
  },
  {
    title: 'Search',
    url: '#',
    icon: IconSearch,
  },
  {
    title: 'Settings',
    url: '#',
    icon: IconSettings,
  },
]

export const Default: Story = {
  render: () => (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <Sidebar>
          <SidebarHeader>
            <div className="px-4 py-2">
              <h2 className="text-lg font-semibold">Application</h2>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Platform</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <div className="px-4 py-2 text-sm text-muted-foreground">
              © 2026 Company
            </div>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <main className="flex-1 p-8">
            <div className="rounded-lg border border-border p-8">
              <h1 className="text-2xl font-bold">Main Content</h1>
              <p className="mt-2 text-muted-foreground">
                This is where your main content goes.
              </p>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  ),
}

export const WithMultipleGroups: Story = {
  render: () => (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <Sidebar>
          <SidebarHeader>
            <div className="px-4 py-2">
              <h2 className="text-lg font-semibold">Dashboard</h2>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>General</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#">
                        <IconHome className="h-4 w-4" />
                        <span>Home</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#">
                        <IconInbox className="h-4 w-4" />
                        <span>Inbox</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Tools</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#">
                        <IconCalendar className="h-4 w-4" />
                        <span>Calendar</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#">
                        <IconSearch className="h-4 w-4" />
                        <span>Search</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Settings</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#">
                        <IconSettings className="h-4 w-4" />
                        <span>Settings</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <main className="flex-1 p-8">
            <div className="rounded-lg border border-border p-8">
              <h1 className="text-2xl font-bold">Content Area</h1>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  ),
}

export const Collapsed: Story = {
  render: () => (
    <SidebarProvider defaultOpen={false}>
      <div className="flex h-screen w-full">
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild tooltip={item.title}>
                        <a href={item.url}>
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <main className="flex-1 p-8">
            <div className="rounded-lg border border-border p-8">
              <h1 className="text-2xl font-bold">Collapsed Sidebar</h1>
              <p className="mt-2 text-muted-foreground">
                The sidebar starts collapsed. Press 'b' to toggle.
              </p>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  ),
}
