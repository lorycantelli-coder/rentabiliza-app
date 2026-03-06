import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldContent,
  FieldGroup,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'

const meta = {
  title: 'UI/Field',
  component: Field,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Field className="w-[350px]">
      <FieldLabel>Email</FieldLabel>
      <Input type="email" placeholder="your@email.com" />
      <FieldDescription>We'll never share your email.</FieldDescription>
    </Field>
  ),
}

export const WithError: Story = {
  render: () => (
    <Field className="w-[350px]" data-invalid="true">
      <FieldLabel>Password</FieldLabel>
      <Input type="password" placeholder="••••••••" aria-invalid="true" />
      <FieldError>Password must be at least 8 characters.</FieldError>
    </Field>
  ),
}

export const WithTextarea: Story = {
  render: () => (
    <Field className="w-[350px]">
      <FieldLabel>Bio</FieldLabel>
      <Textarea placeholder="Tell us about yourself" rows={4} />
      <FieldDescription>Maximum 500 characters.</FieldDescription>
    </Field>
  ),
}

export const WithSelect: Story = {
  render: () => (
    <Field className="w-[350px]">
      <FieldLabel>Country</FieldLabel>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="us">United States</SelectItem>
          <SelectItem value="uk">United Kingdom</SelectItem>
          <SelectItem value="ca">Canada</SelectItem>
          <SelectItem value="au">Australia</SelectItem>
        </SelectContent>
      </Select>
      <FieldDescription>Select your country of residence.</FieldDescription>
    </Field>
  ),
}

export const WithCheckbox: Story = {
  render: () => (
    <Field>
      <div className="flex items-start gap-2">
        <Checkbox id="terms" />
        <FieldContent>
          <FieldLabel htmlFor="terms">Accept terms and conditions</FieldLabel>
          <FieldDescription>
            You agree to our Terms of Service and Privacy Policy.
          </FieldDescription>
        </FieldContent>
      </div>
    </Field>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <Field orientation="horizontal" className="w-[500px]">
      <FieldLabel>Email</FieldLabel>
      <div className="flex-1">
        <Input type="email" placeholder="your@email.com" />
        <FieldDescription>We'll never share your email.</FieldDescription>
      </div>
    </Field>
  ),
}

export const Multiple: Story = {
  render: () => (
    <FieldGroup className="w-[350px]">
      <Field>
        <FieldLabel>First Name</FieldLabel>
        <Input placeholder="John" />
      </Field>
      <Field>
        <FieldLabel>Last Name</FieldLabel>
        <Input placeholder="Doe" />
      </Field>
      <Field>
        <FieldLabel>Email</FieldLabel>
        <Input type="email" placeholder="john.doe@example.com" />
        <FieldDescription>We'll never share your email.</FieldDescription>
      </Field>
    </FieldGroup>
  ),
}

export const WithMultipleErrors: Story = {
  render: () => (
    <Field className="w-[350px]" data-invalid="true">
      <FieldLabel>Username</FieldLabel>
      <Input placeholder="johndoe" aria-invalid="true" />
      <FieldError
        errors={[
          { message: 'Username must be at least 3 characters' },
          { message: 'Username can only contain letters and numbers' },
        ]}
      />
    </Field>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Field className="w-[350px]" data-disabled="true">
      <FieldLabel>Email</FieldLabel>
      <Input type="email" placeholder="your@email.com" disabled />
      <FieldDescription>This field is disabled.</FieldDescription>
    </Field>
  ),
}
