import React from 'react';
import Link from 'next/link';
import ItemList from './item-list';

export default function Page() {
    return (
        <main className="bg-black text-white min-h-screen p-8">
            <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
            <ItemList />

            <br />
            <Link href="/">Back to home</Link>

        </main>
    );
}
