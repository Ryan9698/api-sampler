// Component for fetching data and rendering it within a designated component.

async function fetchData() {
  const res = await fetch('http://localhost:3000/api/data'); // Change this link to change the responses.
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function FetchDataComponent() {
  const data = await fetchData();
  return (
    <div>
      <h1 className="text-3xl font-bold">API Response</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
