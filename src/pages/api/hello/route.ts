export async function POST(req: Request) {
    return new Response(JSON.stringify({message: "Hello"}),{
        headers: {
            "Content-Type": "application/json"
        },
        status: 500
    });
}