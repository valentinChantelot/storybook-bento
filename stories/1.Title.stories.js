import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Title from '../components/Title';

export default {
  title: 'Title',
  component: Title,
  decorators: [withKnobs]
};

export const TitleWithKnobs = () => ({
  components: { Title },
  props: {
    font1: {
      default: boolean('Font1', false)
    },
    font2: {
      default: boolean('Font2', false)
    },
    isPrimary: {
      default: boolean('isPrimary', false)
    },
    text: {
      default: text('Text', 'Pollen')
    }
  },
  template: '<Title :font1="font1" :font2="font2" :isPrimary="isPrimary">{{ text }}</Title>',
});

export const Homepage = () => ({
  components: { Title },
  template: '<Title @click="action">😀 😎 👍 💯</Title>',
  methods: { action: action('clicked') },
});
