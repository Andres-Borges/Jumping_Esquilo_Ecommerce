import ProductsList from "../components/ProductsList";

export const dynamic = 'force-dynamic';

export default async function ProductsPage() {
    const response = await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/products');
    const products = await response.json();

    const response2 = await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/users/1/cart', {
        cache: 'no-cache',
    });
    const cartProducts = await response2.json();

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8">Products</h1>
            <ProductsList products={products} initialCartProducts={cartProducts} />
        </div>
    )
}