import type { Meta, StoryObj } from '@storybook/react';

import ReactLogo  from './ReactLogo';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ReactLogo> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'React Logo',
  component: ReactLogo,
};

export default meta;
type Story = StoryObj<typeof ReactLogo>;

export const ReactIcon: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};