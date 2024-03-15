// ProductsManagement.js
import React from 'react';
import { products } from '../data';

const ProductsManagement = () => {
    return (
        <div>
            <h1>Products Management</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name} - {product.category}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductsManagement;
