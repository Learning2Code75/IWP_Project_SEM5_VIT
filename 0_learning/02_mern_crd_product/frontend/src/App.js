//named imports
import{
  Switch,
  Route,
  Link
} from 'react-router-dom';

//own imports: 
import './App.css';
import Header from './cmps/Header';
import Home from './cmps/Home';
import Products from './cmps/Products';
import ProductUpdate from './cmps/ProductUpdate';


function App() {
  return (
    <>
    <div className="App">
      <h1>This is app.js</h1>
      <Header />
    </div>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/products" exact>
        <Products />
      </Route>

      <Route path="/products/:id" exact>
        <ProductUpdate  />
      </Route>
    </Switch>
    </>
  );
}

export default App;
