'use client';
import { useEffect, useState } from 'react'

import './shopping-cart.css';
import { apiLoadProducts } from "../../services/api/apiProducts";

export default function ShoppingCartPage() {
    const [products, setProducts] = useState([]);

    const loadProduct = async () => {
        // TODO: Update to state (setProducts)
        console.log("products", await apiLoadProducts());
    }

    useEffect(() => {
        loadProduct();
    }, []);

return <div className="shopping-cart-container">
    <h1>Shopping Cart</h1>
</div>
}
