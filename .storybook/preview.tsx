import type { Preview } from '@storybook/react'
import React from 'react'
import { TooltipProvider } from '../components/ui/tooltip'
import '../app/globals.css'
import './storybook.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo'
    },

    backgrounds: {
      default: 'rentabiliza-navy',
      values: [
        { name: 'rentabiliza-navy', value: '#040812' },
        { name: 'rentabiliza-surface', value: '#0A1326' },
        { name: 'light', value: '#ffffff' },
      ],
    },

    layout: 'centered',
  },

  decorators: [
    (Story) => (
      <div className="min-h-screen bg-background text-foreground antialiased">
        <TooltipProvider>
          <Story />
        </TooltipProvider>
      </div>
    ),
  ],
};

export default preview;
