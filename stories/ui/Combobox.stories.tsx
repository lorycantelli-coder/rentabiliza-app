import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useState } from 'react'
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxEmpty,
  ComboboxSeparator,
} from '@/components/ui/combobox'

const meta = {
  title: 'UI/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Combobox>

export default meta
type Story = StoryObj<typeof meta>

const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt.js', label: 'Nuxt.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
  { value: 'vite', label: 'Vite' },
]

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>(null)

    return (
      <Combobox value={value} onValueChange={setValue}>
        <ComboboxInput
          placeholder="Search framework..."
          className="w-[300px]"
          showTrigger
        />
        <ComboboxContent>
          <ComboboxList>
            <ComboboxEmpty>No framework found.</ComboboxEmpty>
            {frameworks.map((framework) => (
              <ComboboxItem key={framework.value} value={framework.value}>
                {framework.label}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    )
  },
}

export const WithGroups: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>(null)

    return (
      <Combobox value={value} onValueChange={setValue}>
        <ComboboxInput
          placeholder="Select framework..."
          className="w-[300px]"
          showTrigger
        />
        <ComboboxContent>
          <ComboboxList>
            <ComboboxEmpty>No results found.</ComboboxEmpty>
            <ComboboxGroup>
              <ComboboxLabel>JavaScript</ComboboxLabel>
              <ComboboxItem value="next.js">Next.js</ComboboxItem>
              <ComboboxItem value="remix">Remix</ComboboxItem>
              <ComboboxItem value="astro">Astro</ComboboxItem>
            </ComboboxGroup>
            <ComboboxSeparator />
            <ComboboxGroup>
              <ComboboxLabel>Others</ComboboxLabel>
              <ComboboxItem value="sveltekit">SvelteKit</ComboboxItem>
              <ComboboxItem value="nuxt.js">Nuxt.js</ComboboxItem>
            </ComboboxGroup>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    )
  },
}

export const WithClear: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>('next.js')

    return (
      <Combobox value={value} onValueChange={setValue}>
        <ComboboxInput
          placeholder="Search..."
          className="w-[300px]"
          showTrigger
          showClear
        />
        <ComboboxContent>
          <ComboboxList>
            {frameworks.map((framework) => (
              <ComboboxItem key={framework.value} value={framework.value}>
                {framework.label}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    )
  },
}

const languages = [
  'English',
  'French',
  'German',
  'Spanish',
  'Portuguese',
  'Russian',
  'Japanese',
  'Korean',
  'Chinese',
  'Arabic',
  'Hindi',
  'Italian',
]

export const Scrollable: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>(null)

    return (
      <Combobox value={value} onValueChange={setValue}>
        <ComboboxInput
          placeholder="Select language..."
          className="w-[300px]"
          showTrigger
        />
        <ComboboxContent>
          <ComboboxList>
            <ComboboxEmpty>No language found.</ComboboxEmpty>
            {languages.map((language) => (
              <ComboboxItem key={language} value={language.toLowerCase()}>
                {language}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    )
  },
}
