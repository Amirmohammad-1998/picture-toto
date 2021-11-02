import React from 'react';
import './App.css';
import Form from './components/Form';
import CardList from './components/CardList';
import { CardProvider } from './components/CardContext';





function App() {
 


 
 
  return (
    
  <CardProvider>
     
          <div className="App">
            <Form />
            <CardList />
          </div>
     
  </CardProvider>
  );
}

export default App;
