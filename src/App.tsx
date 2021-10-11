import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';
import { ChakraProvider } from '@chakra-ui/react';
import { Header } from './components/templates/Header';

function App() {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Header />
          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
