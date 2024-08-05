import LoveCalculatorClient from '@/components/LoveCalculator/LoveCalculatorClient';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <main className="flex justify-center items-center h-screen bg-gray-100">
        <LoveCalculatorClient />
      </main>
      <Link href="/" passHref>
        <div className="text-xl text-blue-400 hover:text-blue-500 text-center border p-4 bg-white">
          Back to Home
        </div>
      </Link>
    </div>
  );
}
