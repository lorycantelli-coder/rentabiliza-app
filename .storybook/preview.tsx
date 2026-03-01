import type { Preview } from '@storybook/react'
import React from 'react'
import { TooltipProvider } from '../components/ui/tooltip'
import '../app/globals.css'

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
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#0a0a0a' },
      ],
    },
  },

  decorators: [
    (Story) => React.createElement(
      TooltipProvider,
      null,
      React.createElement(Story)
    ),
  ],
};

export default preview;