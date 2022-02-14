import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from '../../components/MyLabel';

export default {
  title: 'UI/MyLabel',
  component: MyLabel,
  argTypes: {
    size: { control: 'select' },
    color: { control: 'select' },
    fontColor: { control: 'color' },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  size: 'normal',
};

export const Secondary = Template.bind({});

Secondary.args = {
  size: 'normal',
  color: 'secondary',
};

export const Tertiary = Template.bind({});

Tertiary.args = {
  size: 'normal',
  color: 'tertiary',
};

export const AllCaps = Template.bind({});

AllCaps.args = {
  AllCaps: true,
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  size: 'h1',
  color: 'primary',
  label: 'Custom Font Color',
  fontColor: '#800080',
};
