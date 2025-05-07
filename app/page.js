import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white p-25">
            <h1 className="text-4xl font-bold mb-6">
            CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        <Link href="/week-2">Go to Week 2 Assignment</Link>
      </p>
    </main>
  );
}
