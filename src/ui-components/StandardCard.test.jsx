import React from 'react';
import { render, screen } from '@testing-library/react';
import  StandardCard  from './StandardCard';

describe('StandardCard Component', () => {
  test('renders with default props', () => {
    render(<StandardCard />);
    const priceElement = screen.getByText('$99 USD');
    const infoElement = screen.getByText('4bds 3 ba 2,530 sqft - Active');
    const addressElement = screen.getByText('832 34th Ave, Seattle, WA 98122');
    
    expect(priceElement).toBeInTheDocument();
    expect(infoElement).toBeInTheDocument();
    expect(addressElement).toBeInTheDocument();
  });

  test('renders with custom price', () => {
    render(<StandardCard price="$150 USD" />);
    const priceElement = screen.getByText('$150 USD');
    expect(priceElement).toBeInTheDocument();
  });

  test('has correct image source', () => {
    const testImgUrl = 'https://test-image.jpg';
    render(<StandardCard imgUrl={testImgUrl} />);
    const imageElement = screen.getByRole('img');
    expect(imageElement).toHaveAttribute('src', testImgUrl);
  });

  test('uses default image when imgUrl is not provided', () => {
    render(<StandardCard />);
    const imageElement = screen.getByRole('img');
    expect(imageElement).toHaveAttribute('src', 'https://picsum.photos/100');
  });

  test('applies custom overrides correctly', () => {
    const customAddress = '123 New Street, New City';
    render(
      <StandardCard 
        price="$200 USD"
        overrides={{
          "832 34th Ave, Seattle, WA 98122": {
            "children": customAddress
          }
        }}
      />
    );
    
    const addressElement = screen.getByText(customAddress);
    const priceElement = screen.getByText('$200 USD');
    
    expect(addressElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
  });
});