import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  NativeSelect,
  NativeSelectOption,
  NativeSelectOptGroup,
} from '@/components/ui/native-select'

const meta = {
  title: 'UI/NativeSelect',
  component: NativeSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NativeSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <NativeSelect className="w-[280px]">
      <NativeSelectOption value="">Select an option</NativeSelectOption>
      <NativeSelectOption value="1">Option 1</NativeSelectOption>
      <NativeSelectOption value="2">Option 2</NativeSelectOption>
      <NativeSelectOption value="3">Option 3</NativeSelectOption>
    </NativeSelect>
  ),
}

export const WithOptGroups: Story = {
  render: () => (
    <NativeSelect className="w-[280px]">
      <NativeSelectOption value="">Select a timezone</NativeSelectOption>
      <NativeSelectOptGroup label="North America">
        <NativeSelectOption value="est">Eastern Standard Time</NativeSelectOption>
        <NativeSelectOption value="cst">Central Standard Time</NativeSelectOption>
        <NativeSelectOption value="mst">Mountain Standard Time</NativeSelectOption>
        <NativeSelectOption value="pst">Pacific Standard Time</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Europe">
        <NativeSelectOption value="gmt">Greenwich Mean Time</NativeSelectOption>
        <NativeSelectOption value="cet">Central European Time</NativeSelectOption>
        <NativeSelectOption value="eet">Eastern European Time</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Asia">
        <NativeSelectOption value="ist">India Standard Time</NativeSelectOption>
        <NativeSelectOption value="jst">Japan Standard Time</NativeSelectOption>
        <NativeSelectOption value="cst-china">China Standard Time</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  ),
}

export const Disabled: Story = {
  render: () => (
    <NativeSelect className="w-[280px]" disabled>
      <NativeSelectOption value="">Select an option</NativeSelectOption>
      <NativeSelectOption value="1">Option 1</NativeSelectOption>
      <NativeSelectOption value="2">Option 2</NativeSelectOption>
    </NativeSelect>
  ),
}

export const DisabledOptions: Story = {
  render: () => (
    <NativeSelect className="w-[280px]">
      <NativeSelectOption value="">Select a plan</NativeSelectOption>
      <NativeSelectOption value="free">Free Plan</NativeSelectOption>
      <NativeSelectOption value="pro">Pro Plan</NativeSelectOption>
      <NativeSelectOption value="enterprise" disabled>
        Enterprise Plan (Contact Sales)
      </NativeSelectOption>
    </NativeSelect>
  ),
}

export const Multiple: Story = {
  render: () => (
    <NativeSelect className="w-[280px]" multiple size={5}>
      <NativeSelectOption value="js">JavaScript</NativeSelectOption>
      <NativeSelectOption value="ts">TypeScript</NativeSelectOption>
      <NativeSelectOption value="py">Python</NativeSelectOption>
      <NativeSelectOption value="rb">Ruby</NativeSelectOption>
      <NativeSelectOption value="go">Go</NativeSelectOption>
      <NativeSelectOption value="rs">Rust</NativeSelectOption>
      <NativeSelectOption value="java">Java</NativeSelectOption>
    </NativeSelect>
  ),
}

export const Small: Story = {
  render: () => (
    <NativeSelect size="sm" className="w-[200px]">
      <NativeSelectOption value="">Small select</NativeSelectOption>
      <NativeSelectOption value="1">Option 1</NativeSelectOption>
      <NativeSelectOption value="2">Option 2</NativeSelectOption>
      <NativeSelectOption value="3">Option 3</NativeSelectOption>
    </NativeSelect>
  ),
}

export const Countries: Story = {
  render: () => (
    <NativeSelect className="w-[280px]">
      <NativeSelectOption value="">Select a country</NativeSelectOption>
      <NativeSelectOption value="us">🇺🇸 United States</NativeSelectOption>
      <NativeSelectOption value="uk">🇬🇧 United Kingdom</NativeSelectOption>
      <NativeSelectOption value="ca">🇨🇦 Canada</NativeSelectOption>
      <NativeSelectOption value="au">🇦🇺 Australia</NativeSelectOption>
      <NativeSelectOption value="de">🇩🇪 Germany</NativeSelectOption>
      <NativeSelectOption value="fr">🇫🇷 France</NativeSelectOption>
      <NativeSelectOption value="br">🇧🇷 Brazil</NativeSelectOption>
    </NativeSelect>
  ),
}
