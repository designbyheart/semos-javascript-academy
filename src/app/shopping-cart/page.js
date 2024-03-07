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
/*
    This is from a React component and it's using a feature of React called "Hooks". Specifically, it's using the useEffect hook.
    useEffect is a function that takes two arguments: a function and an array of dependencies. The function you pass to useEffect will run after the render is committed to the screen. Think of it as saying "after React renders this component and updates the DOM, then run this function".

    The second argument to useEffect, the dependency array, is used to tell React when to re-run the effect. If one of the dependencies changes between renders, React will re-run the effect. An empty array [] is passed as the dependency array. This means that the effect will only run once, similar to componentDidMount in class components.
    The loadProduct function will be called once when the component is first rendered, and then never again.
*/
    useEffect(() => {
        loadProduct();
    }, []);

return <div className="shopping-cart-container">
    <h1>Shopping Cart</h1>
</div>
}
