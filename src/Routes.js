// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from'react-router-dom';

import Dashboard from './components/Dashboard';
import ProductsManagement from './components/ProductsManagement';
import OrdersManagement from './components/OrdersManagement';
import CalendarView from './components/CalendarView';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/products" component={ProductsManagement} />
                <Route exact path="/orders" component={OrdersManagement} />
                <Route exact path="/calendar" component={CalendarView} />
            </Switch>
        </Router>
    );
};

export default Routes;
