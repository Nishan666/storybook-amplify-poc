import React from 'react';
import  StandardCard  from './StandardCard';

export default {
  title: 'Amplify UI/StandardCard',
  component: StandardCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    price: { control: 'text' },
    imgUrl: { control: 'text' },
  },
};

// Default template for StandardCard
const Template = (args) => <StandardCard {...args} />;

// Base story with default props
export const Default = Template.bind({});
Default.args = {
  price: '$99 USD',
  imgUrl: 'https://picsum.photos/id/231/200/300',
};

// Custom price
export const CustomPrice = Template.bind({});
CustomPrice.args = {
  price: '$149.99 USD',
  imgUrl: 'https://picsum.photos/id/231/200/300',
};

// Custom image
export const CustomImage = Template.bind({});
CustomImage.args = {
  price: '$99 USD',
  imgUrl: 'https://picsum.photos/id/237/200/300',
};

// Custom price and image
export const CustomPriceAndImage = Template.bind({});
CustomPriceAndImage.args = {
  price: '$199.99 USD',
  imgUrl: 'https://picsum.photos/id/238/200/300',
};

// Very long price text to test overflow
export const LongPriceText = Template.bind({});
LongPriceText.args = {
  price: 'Special Deal: $99.99 USD with free shipping and 20% off next purchase',
  imgUrl: 'https://picsum.photos/id/231/200/300',
};