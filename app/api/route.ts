import { cookies } from "next/headers";
import { connectToDb } from "./db";

export async function GET() {
    //Creates a new user using COOKIES!!!!
    const cookieName = 'userId';
    const cookieStore = await cookies();

    if (!cookieStore.has(cookieName)) {
        //Sets value for cookie
        const { db } = await connectToDb();
        const users = await db.collection('carts').find().toArray();

        //Get largest id in the database:
        let largestId = 0;
        users.forEach(user => {
            const id = parseInt(user.userId);
            if (id > largestId) largestId = id;
        });

        const newLargestId = largestId + 1;
        cookieStore.set(cookieName, newLargestId.toString());

        return new Response(JSON.stringify(newLargestId), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }


    const userId = cookieStore.get(cookieName)?.value;
    return new Response(JSON.stringify(userId), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}