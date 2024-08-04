export async function GET(request) {
  return new Response(JSON.stringify({ message: "Hello, world!" }), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function TEST(request) {
  return new Response('{"message": "Hello, world!"}', {
    headers: { "Content-Type": "text/html" },
  });

  return (
    <main className="flex min-h-screen items-center justify-center p-24 bg-rose-300">
      {/* Global Container */}
      <div>
        <div className="text-center bg-white space-y-4 border-2 border-black shadow-xl rounded-xl p-8 max-w-md mx-auto">
          <h1 className="text-3xl font-bold">API Sampler</h1>
          <h2 className="text-xl font-thin">
            Learning environment for testing APIs and their responses
          </h2>
          <h3 className="text-md">
            Check the console to review data and API calls :D
          </h3>
        </div>
        {/* Link to Responses */}
        <Link
          href="/"
          className="text-center  border-black rounded-xl p-8 max-w-md mx-auto mt-8"
        >
          <h1 className="text-3xl font-bold text-blue-400 hover:text-blue-600">
            Back to Home
          </h1>
        </Link>
      </div>
    </main>
  );
}
