import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { DirectionProvider, useDirection } from '@/components/ui/direction'
import { Button } from '@/components/ui/button'

const DirectionDemo = () => {
  const direction = useDirection()

  return (
    <div className="space-y-4" dir={direction}>
      <div className="rounded-lg border border-border p-6">
        <h3 className="mb-2 text-lg font-semibold">Current Direction: {direction}</h3>
        <p className="text-sm text-muted-foreground">
          {direction === 'ltr'
            ? 'This text flows from left to right (English, Spanish, etc.)'
            : 'This text flows from right to left (Arabic, Hebrew, etc.)'}
        </p>
      </div>
      <div className="rounded-lg border border-border p-6">
        <div className="mb-4">
          <h4 className="mb-2 font-medium">Text Alignment</h4>
          <p className="text-sm">
            This paragraph demonstrates how text aligns based on direction.
            Notice how the text and UI elements automatically adjust based on
            the direction setting.
          </p>
        </div>
        <div className="flex gap-2">
          <Button size="sm">First</Button>
          <Button size="sm" variant="outline">
            Second
          </Button>
          <Button size="sm" variant="ghost">
            Third
          </Button>
        </div>
      </div>
    </div>
  )
}

const meta = {
  title: 'UI/Direction',
  component: DirectionProvider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const LTR: Story = {
  render: () => (
    <DirectionProvider direction="ltr">
      <div className="space-y-4" dir="ltr">
        <div className="rounded-lg border border-border p-6">
          <h3 className="mb-2 text-lg font-semibold">Left-to-Right (LTR)</h3>
          <p className="text-sm text-muted-foreground">
            This is the default direction for most Western languages like
            English, Spanish, French, German, etc.
          </p>
        </div>
        <div className="flex gap-2">
          <Button>Primary</Button>
          <Button variant="outline">Secondary</Button>
        </div>
      </div>
    </DirectionProvider>
  ),
}

export const RTL: Story = {
  render: () => (
    <DirectionProvider direction="rtl">
      <div className="space-y-4" dir="rtl">
        <div className="rounded-lg border border-border p-6">
          <h3 className="mb-2 text-lg font-semibold">Right-to-Left (RTL)</h3>
          <p className="text-sm text-muted-foreground">
            هذا هو الاتجاه الافتراضي للغات مثل العربية والعبرية والفارسية.
          </p>
        </div>
        <div className="flex gap-2">
          <Button>الأساسي</Button>
          <Button variant="outline">ثانوي</Button>
        </div>
      </div>
    </DirectionProvider>
  ),
}

export const FormInRTL: Story = {
  render: () => (
    <DirectionProvider direction="rtl">
      <div className="w-[400px] space-y-4" dir="rtl">
        <div className="rounded-lg border border-border p-6">
          <h3 className="mb-4 text-lg font-semibold">نموذج التسجيل</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">البريد الإلكتروني</label>
              <input
                type="email"
                className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                placeholder="example@email.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">كلمة المرور</label>
              <input
                type="password"
                className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                placeholder="••••••••"
              />
            </div>
            <Button className="w-full">تسجيل الدخول</Button>
          </div>
        </div>
      </div>
    </DirectionProvider>
  ),
}

export const WithHook: Story = {
  render: () => (
    <DirectionProvider direction="ltr">
      <DirectionDemo />
    </DirectionProvider>
  ),
}
