// Creating a custom header for checking how long to access the data in the http request:
// Creating different things to understand functionality.

export async function GET(request) {
  const startTime = Date.now();

  const data = {
    message: 'Hi! this is your API response. Success :D',
    items: ['Item 1', 'Item 2', 'Item 3'],
  };

  await new Promise((resolve) => setTimeout(resolve, 100)); // Simulating a delay for the "fetch"

  const endTime = Date.now();
  const executionTime = endTime - startTime;
  const currentDate = new Date().toUTCString();

  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
      'Custom-Header': 'This is a custom header :D',
      'X-Execution-Time': `${executionTime}ms`, // Execution Custom Header
      'X-Current-Date': currentDate, //Header showing when it was accessed
    },
  });
}
