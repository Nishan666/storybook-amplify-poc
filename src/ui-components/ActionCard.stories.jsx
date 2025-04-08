import React from 'react';
import { action } from '@storybook/addon-actions';
import ActionCard from './ActionCard';

export default {
  title: 'Amplify UI/ActionCard',
  component: ActionCard,
  parameters: {
    layout: 'centered',
    // This ensures the Actions tab shows in Storybook
    actions: { argTypesRegex: '^on.*' },
    controls: { expanded: true }
  },
  tags: ['autodocs'],
  argTypes: {
    imgUrl: { 
      control: 'text',
      description: 'URL for the product image'
    },
    overrides: { 
      control: 'object',
      description: 'Override properties for component elements' 
    },
  },
};

// Default template for ActionCard with actions tracking
const Template = (args) => {
  // Create a wrapped component that can capture actions
  const wrappedArgs = {...args};
  
  // If there are button overrides, we need to wrap the onClick
  if (args.overrides && args.overrides.Button && args.overrides.Button.onClick) {
    const originalOnClick = args.overrides.Button.onClick;
    
    wrappedArgs.overrides = {
      ...args.overrides,
      Button: {
        ...args.overrides.Button,
        onClick: (event) => {
          // Log the action to the Actions tab
          action('Button clicked')(event);
          // Call the original onClick and prevent default navigation
          const result = originalOnClick(event);
          return result === false ? false : result;
        }
      }
    };
  } else {
    // If no custom onClick, create one that just logs to Actions tab
    if (!wrappedArgs.overrides) wrappedArgs.overrides = {};
    if (!wrappedArgs.overrides.Button) wrappedArgs.overrides.Button = {};
    
    const originalOnClick = wrappedArgs.overrides.Button.onClick;
    
    wrappedArgs.overrides.Button = {
      ...wrappedArgs.overrides.Button,
      onClick: (event) => {
        action('Default button clicked')(event);
        // Allow default navigation to occur, but log it
        if (originalOnClick) return originalOnClick(event);
        return undefined;
      }
    };
  }
  
  return <ActionCard {...wrappedArgs} />;
};

// Base story with default props
export const Default = Template.bind({});
Default.args = {
  imgUrl: 'https://picsum.photos/id/237/400/600',
};

// Custom product title and description
export const CustomProduct = Template.bind({});
CustomProduct.args = {
  imgUrl: 'https://picsum.photos/id/26/400/600',
  overrides: {
    "Classic Long Sleeve T-Shirt": {
      "children": "Premium Hooded Sweatshirt"
    },
    "Information about this product": {
      "children": "Comfortable cotton blend with kangaroo pocket"
    }
  }
};

// Custom price and button text with action
export const CustomPriceAndButton = Template.bind({});
CustomPriceAndButton.args = {
  imgUrl: 'https://picsum.photos/id/96/400/600',
  overrides: {
    "$99 USD": {
      "children": "$49.99 USD"
    },
    "Button": {
      "children": "Add to Cart",
      "onClick": () => {
        action('Add to cart button clicked')({ price: '$49.99' });
        alert('Item added to cart!');
        return false; // Prevent default navigation
      }
    }
  }
};

// Five-star rating example
export const FiveStarRating = Template.bind({});
FiveStarRating.args = {
  imgUrl: 'https://picsum.photos/id/335/400/600',
  overrides: {
    "Rating": {
      "value": 5
    },
    "Classic Long Sleeve T-Shirt": {
      "children": "Bestselling Running Shoes"
    }
  }
};

// Custom styling example
export const CustomStyling = Template.bind({});
CustomStyling.args = {
  imgUrl: 'https://picsum.photos/id/177/400/600',
  overrides: {
    "Classic Long Sleeve T-Shirt": {
      "children": "Limited Edition Watch",
      "color": "rgba(0,58,112,1)"
    },
    "Information about this product": {
      "children": "Hand-crafted with premium materials",
      "fontStyle": "italic"
    },
    "$99 USD": {
      "children": "$299 USD",
      "color": "rgba(191,64,64,1)"
    },
    "Button": {
      "children": "Reserve Now",
      "backgroundColor": "rgba(0,58,112,1)",
      "onClick": () => {
        action('Reserve button clicked')({ item: 'Limited Edition Watch', price: '$299' });
        alert('Item reserved!');
        return false; // Prevent default navigation
      }
    }
  }
};

// Example with a shorter image
export const CompactImage = Template.bind({});
CompactImage.args = {
  imgUrl: 'https://picsum.photos/id/87/400/300',
  overrides: {
    "image": {
      "height": "250px"
    },
    "Classic Long Sleeve T-Shirt": {
      "children": "Compact Camera"
    }
  }
};

// Example with disabled button
export const DisabledButton = Template.bind({});
DisabledButton.args = {
  imgUrl: 'https://picsum.photos/id/20/400/600',
  overrides: {
    "Classic Long Sleeve T-Shirt": {
      "children": "Sold Out Item"
    },
    "Button": {
      "isDisabled": true,
      "children": "Out of Stock"
    }
  }
};

// Interactive button example with detailed action info
export const InteractiveButton = Template.bind({});
InteractiveButton.args = {
  imgUrl: 'https://picsum.photos/id/1005/400/600',
  overrides: {
    "Classic Long Sleeve T-Shirt": {
      "children": "Interactive Action Example"
    },
    "Information about this product": {
      "children": "This example shows custom actions in the Actions panel"
    },
    "Button": {
      "children": "View Details",
      "onClick": () => {
        const productData = {
          id: '12345',
          name: 'Interactive Action Example',
          category: 'Demo',
          viewedAt: new Date().toISOString()
        };
        
        action('View Details clicked')(productData);
        alert('Action logged! Check the Actions panel in Storybook.');
        return false; // Prevent default navigation
      }
    }
  }
};

// Custom action with multiple action types
export const MultipleActions = Template.bind({});
MultipleActions.args = {
  imgUrl: 'https://picsum.photos/id/1025/400/600',
  overrides: {
    "Classic Long Sleeve T-Shirt": {
      "children": "Multi-Action Product"
    },
    "Information about this product": {
      "children": "Demonstrates using multiple action types"
    },
    "Button": {
      "children": "Quick Buy",
      "onClick": () => {
        // Log multiple actions to be visible in the Actions tab
        action('Quick Buy initiated')({ timestamp: Date.now() });
        
        setTimeout(() => {
          action('Processing purchase')({ status: 'processing' });
        }, 1000);
        
        setTimeout(() => {
          action('Purchase completed')({ status: 'completed', orderNumber: 'ORD-' + Math.floor(Math.random() * 10000) });
        }, 2000);
        
        alert('Multi-step purchase process started. Watch the Actions tab!');
        return false;
      }
    }
  }
};

// Rating change example
export const InteractiveRating = Template.bind({});
InteractiveRating.args = {
  imgUrl: 'https://picsum.photos/id/331/400/600',
  overrides: {
    "Classic Long Sleeve T-Shirt": {
      "children": "Interactive Rating Product"
    },
    "Information about this product": {
      "children": "This product demonstrates rating interactions"
    },
    "Rating": {
      "value": 3,
      "onValueChange": (newValue) => {
        action('Rating changed')({ oldValue: 3, newValue: newValue });
        alert(`Thank you for your ${newValue}-star rating!`);
      }
    }
  }
};

// Multiple interaction points example
export const MultipleInteractions = Template.bind({});
MultipleInteractions.args = {
  imgUrl: 'https://picsum.photos/id/1075/400/600',
  overrides: {
    "Classic Long Sleeve T-Shirt": {
      "children": "Multi-Interaction Product"
    },
    "Information about this product": {
      "children": "Product with multiple interactive elements"
    },
    "image": {
      "onClick": () => {
        action('Image clicked')({ action: 'view larger image' });
        alert('Opening larger image view');
      }
    },
    "Classic Long Sleeve T-Shirt": {
      "children": "Deluxe Item with Multiple Actions",
      "onClick": () => {
        action('Title clicked')({ action: 'show product details' });
        alert('Opening detailed product information');
      }
    },
    "$99 USD": {
      "children": "$129.99 USD",
      "onClick": () => {
        action('Price clicked')({ action: 'show pricing details' });
        alert('Opening pricing and discount information');
      }
    },
    "Button": {
      "children": "Add to Cart",
      "onClick": () => {
        action('Add to cart clicked')({ item: 'Deluxe Item', price: '$129.99' });
        alert('Item added to cart!');
        return false;
      }
    }
  }
};