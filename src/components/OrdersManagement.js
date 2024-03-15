// OrdersManagement.js
import React from 'react';
import { orders } from '../data';

const OrdersManagement = () => {
    return (
        <div>
            <h1>Orders Management</h1>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>{order.id} - {order.customerId}</li>
                ))}
            </ul>
        </div>
    );
};

export default OrdersManagement;
