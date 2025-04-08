import { StandardCard, ItemCard, ActionCard } from './ui-components';
import './App.css';

function App() {

  const handleActionButtonClick = () => {
    alert('Item added to cart!');
  };

  return (
    <div className="App">
      <StandardCard
        price="$12 USD"
        imgUrl="https://picsum.photos/id/231/200/300"
      />
      <br />
      <br />
      <ItemCard
        overrides={{
          "T-Shirt": {
            "children": "Hoodie"
          },
          "Classic Long Sleeve": {
            "children": "Premium Cotton Blend"
          },
          "$99": {
            "children": "$59.99"
          },
          "Badge": {
            "children": "Sale",
            "variation": "warning"
          } 
        }}
      />

      <br />
      <br />
      
      <ActionCard
        imgUrl="https://picsum.photos/id/237/400/600"
        overrides={{
          "Classic Long Sleeve T-Shirt": {
            "children": "Premium Wireless Headphones"
          },
          "Information about this product": {
            "children": "Active noise cancellation with up to 20 hours battery life"
          },
          "$99 USD": {
            "children": "$149.99 USD"
          },
          "Button": {
            "children": "Add to Cart",
            "onClick": handleActionButtonClick
          }
        }}
      />


    </div>
  );
}

export default App;