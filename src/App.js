import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/navigation/Navigation';
import Home from './routes/home/Home';
import Auth from './routes/Auth/Auth'
const Shop = () => {
  return <h1>Hello I am Shop</h1>
}

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Auth />} />
      </Route>
    </Routes>


  )
};

export default App;
