import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import '@aws-amplify/ui-react/styles.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      GlobalStyles: () => null,
    }),
  ],
};

export default preview;