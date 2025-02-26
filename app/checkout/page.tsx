import ShoppingCheckoutList from "./ShoppingCheckoutList";

export default async function CheckoutPage() {
    const response = await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/users/1/cart', {
        cache: 'no-cache',
    });
    const cartProducts = await response.json();

    return (
        <ShoppingCheckoutList initialCartProducts={cartProducts} />
    )
}