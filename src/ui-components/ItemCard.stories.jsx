
import React from 'react';
import  ItemCard  from './ItemCard';

export default {
  title: 'Amplify UI/ItemCard',
  component: ItemCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    overrides: { control: 'object' },
  },
};

// Default template for ItemCard with overrides
const Template = (args) => <ItemCard {...args} />;

// Base story with default props
export const Default = Template.bind({});
Default.args = {};

// Custom product information
export const CustomProduct = Template.bind({});
CustomProduct.args = {
  overrides: {
    "T-Shirt": {
      "children": "Hoodie"
    },
    "Classic Long Sleeve": {
      "children": "Premium Cotton Blend"
    },
    "$99": {
      "children": "$59.99"
    }
  }
};

// Custom badge
export const CustomBadge = Template.bind({});
CustomBadge.args = {
  overrides: {
    "Badge": {
      "children": "Sale",
      "variation": "warning"
    }
  }
};

// All customizations together
export const FullyCustomized = Template.bind({});
FullyCustomized.args = {
  overrides: {
    "T-Shirt": {
      "children": "Running Shoes"
    },
    "Classic Long Sleeve": {
      "children": "Lightweight Performance"
    },
    "$99": {
      "children": "$129.99"
    },
    "Badge": {
      "children": "Hot",
      "variation": "error"
    }
  }
};

// Different badge variations
export const BadgeInfo = Template.bind({});
BadgeInfo.args = {
  overrides: {
    "Badge": {
      "children": "Info",
      "variation": "info"
    },
    "T-Shirt": {
      "children": "Water Bottle"
    }
  }
};

export const BadgeWarning = Template.bind({});
BadgeWarning.args = {
  overrides: {
    "Badge": {
      "children": "Limited",
      "variation": "warning"
    },
    "T-Shirt": {
      "children": "Fitness Tracker"
    }
  }
};

export const BadgeError = Template.bind({});
BadgeError.args = {
  overrides: {
    "Badge": {
      "children": "Sold Out",
      "variation": "error"
    },
    "T-Shirt": {
      "children": "Wireless Earbuds"
    }
  }
};
