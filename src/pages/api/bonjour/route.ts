export async function POST(req: Request) {
    const body = await req.json();
    console.log(body);
    return new Response(JSON.stringify({ message: "Hello" }), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 500
    });
}