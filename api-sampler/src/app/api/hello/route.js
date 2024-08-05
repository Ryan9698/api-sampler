export async function GET(request) {
  return new Response(JSON.stringify({ message: 'Hello, world!' }), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function TEST(request) {
  return new Response('{"message": "Hello, world!"}', {
    headers: { 'Content-Type': 'text/html' },
  });
}
