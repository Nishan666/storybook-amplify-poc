import { StandardCard, ItemCard } from './ui-components'; // Make sure path is correct
import './App.css';

function App() {
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
    </div>
  );
}

export default App;