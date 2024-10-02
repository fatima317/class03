"use client"
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();
  return (
   <div>
    <h1 className='text-center text-blue-950 font-bold text-4xl '>Welcome to HomePage </h1>
    <br/>
    <br />
    <br />
    <br />
    <br/>
    <br/>
    <br/>
    <br />
    <nav className="flex flex-col justify-items-end">

    <button className='bg-blue-900 text-white font-bold py-2 px-4'onClick={() =>route.push('/About')}>Go to About Page</button>
    <button className='bg-blue-900 text-white font-bold py-2 px-4'onClick={() =>route.push('/Contact')}>Go to Contact Page</button>
    <button className='bg-blue-900 text-white font-bold py-2 px-4'onClick={() =>route.push('/Footer')}>Go to Footer Page</button>
   </nav>
   </div>
  );
}
