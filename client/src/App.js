import { Box } from '@mui/material';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import DataProvider from './components/context/DataProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailView from './components/details/DetailView';
import Cart from './components/cart/Cart';
import SuccessPayment from './components/payment/SuccessPayment';

function App() {
  return (
    <DataProvider>
      <Router>
        <Header />
        <Box style={{ marginTop: '54px' }}>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/product/:id' element={<DetailView />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/paymentsuccess' element={<SuccessPayment/>} />
          </Routes>
        </Box>
      </Router>
    </DataProvider>
  );
}

export default App;
