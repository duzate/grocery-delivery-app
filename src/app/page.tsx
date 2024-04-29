"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import GroceryBackground from "../../public/grocery.jpg";

export default function Home() {
  const router = useRouter();

  return (
    <div className='w-screen h-screen overflow-hidden flex flex-col'>
      <header className='flex justify-between items-center px-32 py-11 bg-zinc-200'>
        <div>
          <span>Logo</span>
        </div>
        <div className='w-2/4 h-full flex justify-end'>
          <button
            onClick={() => router.push("/login")}
            className='bg-red-600 text-white font-medium w-24 h-10 flex justify-center items-center rounded-md'>
            Sing In
          </button>
        </div>
      </header>
      <main className='w-screen h-full py-16'>
        <Image
          src={GroceryBackground}
          className='object-fill w-2/4'
          alt='grocery-background'
        />
      </main>
    </div>
  );
}
