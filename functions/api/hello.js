export async function onRequest(context) {
    // You can access request, env, params, etc from context
    const { request } = context;
    
    const data = {
        message: "Hello World from Cloudflare Workers Backend! 🎉",
        timestamp: new Date().toISOString(),
        method: request.method,
        url: request.url
    };

    return new Response(JSON.stringify(data, null, 2), {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });
}