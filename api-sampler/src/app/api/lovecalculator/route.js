// app/api/love/route.js

export async function POST(request) {
  const { firstName, secondName } = await request.json();

  try {
    const response = await fetch(
      `https://love-calculator.p.rapidapi.com/getPercentage?sname=${encodeURIComponent(
        secondName
      )}&fname=${encodeURIComponent(firstName)}`,
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.RAPIDAPI_LOVECALC_KEY,
          'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data from Love Calculator API');
    }

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message || 'An error occurred.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
