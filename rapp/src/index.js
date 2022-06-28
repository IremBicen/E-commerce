import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './reset.css';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ChakraProvider } from '@chakra-ui/react';
import { ReactQueryDevtools } from 'react-query/devtools'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BasketProvider } from "./contexts/BasketContext";

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnMount:false,
      refetchOnWindowFocus:false,
    }
  }
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ChakraProvider>
      <BasketProvider>
       <App />
      </BasketProvider>
    </ChakraProvider>

    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
