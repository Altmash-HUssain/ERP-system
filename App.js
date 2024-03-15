
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles.css';
import Routes from './Routes';
import ProductsManagement from './components/ProductsManagement';
import OrdersManagement from './components/OrdersManagement';
import CalendarView from './components/CalendarView';
import { products, orders } from './data'; // Importing mock data

function App() {
    return (
        <Router>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Routes} />
                    <Route exact path="/products">
                        <ProductsManagement products={products} />
                    </Route>
                    <Route exact path="/orders">
                        <OrdersManagement orders={orders} />
                    </Route>
                    <Route exact path="/calendar" component={CalendarView} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
