import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/navigation/Navigation';
import Home from './routes/home/Home';
import Auth from './routes/Auth/Auth'
import Shop from './routes/Shop/Shop';
import Checkout from './routes/Checkout/Checkout';
import { checkIsUserSession } from './store/user/userAction';
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkIsUserSession())
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Auth />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>


  )
};

export default App;
