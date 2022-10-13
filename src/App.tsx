import React from 'react';
import './App.css';
import Header from './components/Header';
import {Container} from 'react-bootstrap';

function App() {
  return (
    <>
      <Header/>
      <main>
        <Container>
        <h1>React App is working!</h1>
        </Container>
      </main>
    </>
  );
}

export default App;
