'use client';
import { useState } from "react";
import { Product } from "../product-data";

export default async function ShoppingCheckoutList({ initialCartProducts }: { initialCartProducts: Product[] }) {
    const [cartProducts, setCartProducts] = useState(initialCartProducts);
    const taxPerCentage = 0.13;

    function calculateTotalWithoutTaxes() {
        let total = 0;
        cartProducts.forEach(function (product) {
            total += product.price;
        })

        return total;
    }

    function calculateTaxes() {
        let total = calculateTotalWithoutTaxes();
        //Get the percentage in taxes
        return total * taxPerCentage;
    }

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8">Checkout</h1>
            {cartProducts.length === 0 ? (
                <div>
                    <h2 className="text-3xl my-5">There is nothing in here...</h2>
                    <a className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full" href="/products">Browse our products</a>
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300 inline-block">
                    {cartProducts.map(product => (
                        <div className="mb-4">
                            <h3 className="font-bold inline-block w-96">{product.name}</h3>
                            <span>${product.price}.00</span>
                        </div>
                    ))}
                    <div className="mb-4">
                        <h3 className="font-bold inline-block w-96">Taxes:</h3>
                        <span>${(await calculateTaxes()).toFixed(2)}</span>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-bold inline-block w-96">Total:</h3>
                        <span>${(calculateTotalWithoutTaxes() + calculateTaxes()).toFixed(2)}</span>
                    </div>
                    <div className="flex mt-5">
                        <a className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-5 w-40 text-center" href="/checkout">Purchase</a>
                        <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40 text-center" href="/cart">Return to Cart</a>
                    </div>
                </div>
            )
            }
        </div >
    )
}