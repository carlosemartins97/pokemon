import React from 'react';
import ItemCarouselProvider from './core/contexts/ItemCarouselContext';
import PokemonsProvider from './core/contexts/PokemonsContext';
import Home from './pages/Home';

function App() {
  return (
    <ItemCarouselProvider>
      <PokemonsProvider>
        <Home />
      </PokemonsProvider>
    </ItemCarouselProvider>
    
  );
}

export default App;
