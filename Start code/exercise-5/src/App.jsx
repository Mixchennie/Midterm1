// App.jsx
import React from 'react';
import { cardData } from './data.js';
import Card from './Card';

function App() {
  return (
    <div className="app">
      <header>
        <h1>My Card Gallery</h1>
      </header>
      <main>
        <div className="cards">
          {cardData.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              name={card.name}
              class={card.class}
              hobbies={card.hobbies}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;