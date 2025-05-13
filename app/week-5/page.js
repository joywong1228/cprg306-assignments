import React from 'react';
import NewItem from './new-item';
import Link from 'next/link';

export default function Page() {
    return (
        <main className="bg-black text-white flex flex-col items-center p-8">
            <NewItem />
            <Link href="/" className="hover:text-blue-400 mt-5">Back to home</Link>

        </main>
    );
}
