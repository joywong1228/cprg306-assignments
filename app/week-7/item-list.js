'use client';
import React, { useState } from 'react';
import Item from './item';

export default function ItemList({ items }) {
    const [sortBy, setSortBy] = useState('name');

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        if (sortBy === 'category') return a.category.localeCompare(b.category);
        return 0;
    });

    const groupedItems = [...items]
        .sort((a, b) => a.name.localeCompare(b.name))
        .reduce((acc, item) => {
            const cat = item.category;
            if (!acc[cat]) acc[cat] = [];
            acc[cat].push(item);
            return acc;
        }, {});

    const sortedCategories = Object.keys(groupedItems).sort();

    return (
        <div>
            {/* Buttons */}
            <div className="flex space-x-4 mb-4 items-center">
                <p> Sort by:</p>
                <button onClick={() => setSortBy('name')} className={`px-4 py-2 rounded ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                    Sort by Name
                </button>
                <button onClick={() => setSortBy('category')} className={`px-4 py-2 rounded ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                    Sort by Category
                </button>
                <button onClick={() => setSortBy('group')} className={`px-4 py-2 rounded ${sortBy === 'group' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                    Group by Category
                </button>
            </div>

            {/* Render items */}
            {sortBy === 'group' ? (
                <div className="space-y-6">
                    {sortedCategories.map(cat => (
                        <div key={cat}>
                            <h2 className="capitalize text-2xl font-bold mb-2">{cat}</h2>
                            <ul className="space-y-2">
                                {groupedItems[cat].map((item, index) => (
                                    <Item key={`${cat}-${item.name}-${index}`} {...item} />
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ) : (
                <ul className="space-y-4">
                    {sortedItems.map((item, index) => (
                        <Item key={`${item.name}-${index}`} {...item} />
                    ))}
                </ul>
            )}
        </div>
    );
}
