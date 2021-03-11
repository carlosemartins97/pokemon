import React from 'react';
import ItemCarouselProvider from './core/contexts/ItemCarouselContext';
import Home from './pages/Home';

function App() {
  return (
    <ItemCarouselProvider>
      <Home />
    </ItemCarouselProvider>
    
  );
}

export default App;
