export async function GET(req: Request) {
    const body = await req.json();
    console.log(body);
    return new Response("500", { status: 500 });
}