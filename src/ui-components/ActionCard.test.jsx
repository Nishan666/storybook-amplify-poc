import React from 'react';
import { render, screen } from '@testing-library/react';
import ActionCard from './ActionCard';

describe('ActionCard Component', () => {
  test('renders with default props', () => {
    render(<ActionCard />);
    const titleElement = screen.getByText('Classic Long Sleeve T-Shirt');
    const descriptionElement = screen.getByText('Information about this product');
    const priceElement = screen.getByText('$99 USD');
    const buttonElement = screen.getByText('Button');
    
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders with custom image URL', () => {
    const testImgUrl = 'https://test-image.jpg';
    render(<ActionCard imgUrl={testImgUrl} />);
    const imageElement = screen.getByRole('img');
    expect(imageElement).toHaveAttribute('src', testImgUrl);
  });

  test('renders with custom overrides', () => {
    render(
      <ActionCard 
        overrides={{
          "Classic Long Sleeve T-Shirt": {
            "children": "Custom Product Name"
          },
          "Information about this product": {
            "children": "Custom Description"
          },
          "$99 USD": {
            "children": "$199 USD"
          },
          "Button": {
            "children": "Custom Button"
          }
        }}
      />
    );
    
    expect(screen.getByText('Custom Product Name')).toBeInTheDocument();
    expect(screen.getByText('Custom Description')).toBeInTheDocument();
    expect(screen.getByText('$199 USD')).toBeInTheDocument();
    expect(screen.getByText('Custom Button')).toBeInTheDocument();
  });
});