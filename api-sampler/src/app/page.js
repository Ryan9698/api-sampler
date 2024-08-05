// import Image from "next/image";
import Link from 'next/link';

export default function Home() {
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
        <Link href="/response" passHref>
          <h1 className="text-3xl font-bold text-blue-400 hover:text-blue-600 text-center mt-8">
            Test API/JSON Response
          </h1>
        </Link>
        <Link href="lovecalculator" passHref>
          <div className="text-xl text-center text-blue-400 hover:text-blue-500 p-4 mx-auto">
            Love Calculator
          </div>
        </Link>
      </div>
    </main>
  );
}
