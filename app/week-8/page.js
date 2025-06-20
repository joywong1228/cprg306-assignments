'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

export default function Page() {
    const [items, setItems] = useState(
        itemsData.map((item, index) => ({ ...item, id: Date.now() + index }))
    );

    const [selectedItemName, setSelectedItemName] = useState('');

    const handleAddItem = (item) => {
        const newItem = { ...item, id: Date.now() };
        setItems(prev => [newItem, ...prev]);
    };

    const handleItemSelect = (item) => {
        const cleanedName = item.name
            .split(',')[0]                     // remove size
            .replace(/[^\p{L}\s]/gu, '')       // remove emoji
            .trim()
            .toLowerCase();
        setSelectedItemName(cleanedName);
    };

    return (
        <main className="bg-black text-white min-h-screen p-8">
            <h1 className="text-3xl font-bold mb-6">Shopping List</h1>

            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2 space-y-6">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>

                <div className="md:w-1/2">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>

            <br />
            <Link href="/" className="hover:text-blue-400">Back to home</Link>
        </main>
    );
}
