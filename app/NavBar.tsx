export default function NavBar() {
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <ul className="flex space-x-4">
                    <li><a href="/products" className="text-gray-700 hover:text-black">Products</a></li>
                    <li><a href="/cart" className="text-gray-700 hover:text-black">Cart</a></li>
                    <li><a href="/checkout" className="text-gray-700 hover:text-black">Checkout</a></li>
                </ul>
            </div>
        </nav >
    )
}