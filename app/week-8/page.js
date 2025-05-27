'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';

export default function Page() {
    const [items, setItems] = useState(
        itemsData.map((item, index) => ({ ...item, id: Date.now() + index }))
    );

    const handleAddItem = (item) => {
        const newItem = { ...item, id: Date.now() };
        setItems(prev => [newItem, ...prev]);
    };

    return (
        <main className="bg-black text-white min-h-screen p-8">
            <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />

            <br />
            <Link href="/" className="hover:text-blue-400">Back to home</Link>

        </main>
    );
}
