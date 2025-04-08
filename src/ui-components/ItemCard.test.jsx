import React from 'react';
import { render, screen } from '@testing-library/react';
import  ItemCard  from './ItemCard';


describe('ItemCard Component', () => {
  test('renders with default props', () => {
    render(<ItemCard />);
    
    const badgeElement = screen.getByText('New!');
    const titleElement = screen.getByText('T-Shirt');
    const descriptionElement = screen.getByText('Classic Long Sleeve');
    const priceElement = screen.getByText('$99');
    
    expect(badgeElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
  });

  test('renders with custom product information', () => {
    const customTitle = 'Hoodie';
    const customDescription = 'Premium Cotton Blend';
    const customPrice = '$59.99';
    
    render(
      <ItemCard
        overrides={{
          "T-Shirt": {
            "children": customTitle
          },
          "Classic Long Sleeve": {
            "children": customDescription
          },
          "$99": {
            "children": customPrice
          }
        }}
      />
    );
    
    const titleElement = screen.getByText(customTitle);
    const descriptionElement = screen.getByText(customDescription);
    const priceElement = screen.getByText(customPrice);
    
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
  });

  test('renders with custom badge', () => {
    const customBadgeText = 'Sale';
    
    render(
      <ItemCard
        overrides={{
          "Badge": {
            "children": customBadgeText,
            "variation": "warning"
          }
        }}
      />
    );
    
    const badgeElement = screen.getByText(customBadgeText);
    expect(badgeElement).toBeInTheDocument();
  });

  test('applies multiple overrides correctly', () => {
    const customTitle = 'Running Shoes';
    const customPrice = '$129.99';
    const customBadge = 'Hot';
    
    render(
      <ItemCard
        overrides={{
          "T-Shirt": {
            "children": customTitle
          },
          "$99": {
            "children": customPrice
          },
          "Badge": {
            "children": customBadge,
            "variation": "error"
          }
        }}
      />
    );
    
    const titleElement = screen.getByText(customTitle);
    const priceElement = screen.getByText(customPrice);
    const badgeElement = screen.getByText(customBadge);
    
    expect(titleElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(badgeElement).toBeInTheDocument();
  });
});
