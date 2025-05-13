import React from 'react';
import NewItem from './new-item';

export default function Page() {
    return (
        <main className="bg-black text-white min-h-screen p-8">
            <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
            <NewItem />
        </main>
    );
}
