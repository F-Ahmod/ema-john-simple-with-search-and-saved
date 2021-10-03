import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';

function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
      <Switch>
        <Route path="/shop">
          <Shop></Shop>

        </Route>
        <Route path="/inventory">
          <Inventory></Inventory>

        </Route>
        <Route path="/OrderReview">
          <OrderReview></OrderReview>
        </Route>
      </Switch>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
