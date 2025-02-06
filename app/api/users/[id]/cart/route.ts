import { NextRequest } from "next/server";
import { connectToDb } from "@/app/api/db";

type Params = {
    id: string;
}

export async function GET(request: NextRequest, { params }: { params: Params }) {
    const { db } = await connectToDb();

    const userId = params.id;
    const userCart = await db.collection('carts').findOne({ userId });

    //If user does not yet have items in their cart, returns empty array
    if (!userCart) {
        return new Response(JSON.stringify([]), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    const cartIds = userCart.cartIds;
    const cartProducts = await db.collection('products').find({ id: { $in: cartIds } }).toArray();

    return new Response(JSON.stringify(cartProducts), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

type CartBody = { productId: string }
interface Cart {
    userId: string;
    cartIds: string[];
}

export async function POST(request: NextRequest, { params }: { params: Params }) {
    const { db } = await connectToDb();
    const userId = params.id;
    const body: CartBody = await request.json(); //Convert request to JavaScript object
    const productId = body.productId;

    const updatedCart = await db.collection<Cart>('carts').findOneAndUpdate(
        { userId },
        { $push: { cartIds: productId } },
        { upsert: true, returnDocument: 'after' } //upsert makes sure it creates the cart if user does not have one
    );

    if (!updatedCart) {
        return new Response(JSON.stringify([]), {
            status: 202,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    const cartProducts = await db.collection('products').find({ id: { $in: updatedCart.cartIds } }).toArray();

    return new Response(JSON.stringify(cartProducts), {
        status: 201,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export async function DELETE(request: NextRequest, { params }: { params: Params }) {
    const { db } = await connectToDb();
    const userId = params.id;
    const body: CartBody = await request.json();
    const productId = body.productId;

    const updatedCart = await db.collection<Cart>('carts').findOneAndUpdate(
        { userId },
        { $pull: { cartIds: productId } },
        { returnDocument: 'after' }
    );
    if (!updatedCart) {
        return new Response(JSON.stringify([]), {
            status: 202,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    const cartProducts = await db.collection('products').find({ id: { $in: updatedCart.cartIds } }).toArray(); //Getting the items from their ids

    return new Response(JSON.stringify(cartProducts), {
        status: 202,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}