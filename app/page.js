import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-25 font-sans">
      <h1 className="text-4xl font-bold mb-6">
        CPRG 306: Web Development 2 - Assignments</h1>
      <ul className="mt-3 font-mono text-pink-300">
        <li>
          {/* change from using div to ul and li */}
          <Link href="./week-2" className="hover:text-pink-600 hover:underline" >Week 2 Assignment</Link>
        </li>
        <li>
          <Link href="./week-3" className="hover:text-pink-600 hover:underline">Week 3 Assignment</Link>
          {/* i'm not sure about why using ./ instead of /week-4 still */}
        </li>
        <li>
          <Link href="./week-4" className="hover:text-pink-600 hover:underline">Week 4 Assignment</Link>
        </li>
        <li>
          <Link href="./week-5" className="hover:text-pink-600 hover:underline">Week 5 Assignment</Link>
        </li>
      </ul>
    </main>
  );
}
