import type {StorybookConfig} from '@storybook/react-webpack5';

const config: StorybookConfig = {
    framework: {
        name: '@storybook/react-webpack5',
        options: {fastRefresh: true},
    },
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
    docs: {
        autodocs: false,
    },
    addons: [
        '@storybook/preset-scss',
        '@storybook/addon-knobs',
        {name: '@storybook/addon-essentials', options: {backgrounds: false}},
        './theme-addon/register.tsx',
    ],
    refs: {
        'gravity-charts': {
            title: 'Gravity Charts',
            url: 'https://preview.gravity-ui.com/uikit',
        },
    },
};

export default config;
