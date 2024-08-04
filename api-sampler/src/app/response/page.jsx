// Response page with renders an API response:
import FetchDataComponent from '@/components/FetchDataComponent';
import Link from 'next/link';

export default function Response() {
  return (
    <div>
      <div className="bg-rose-300 flex flex-col justify-center items-center h-screen">
        <div className="border-2 border-black rounded-2xl bg-white text-md font-bolt text-center flex justify-center items-center p-10">
          <FetchDataComponent />
        </div>
        <Link href="/" passHref>
          <div className="text-center p-4 border-black bg-white border-2 border-t-[1px] rounded-b-2xl text-blue-400 hover:text-blue-500 text-2xl">
            <p>Back to Home :D</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
