import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';

function App(){
    return(
        <Router>
            <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Cart" component={Cart} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Product" component={Product} />
            <Route exact path="/ProductList" component={ProductList} />
            <Route exact path="/Register" component={Register} />
            </Switch>
        </Router>
    );
}

export default App;