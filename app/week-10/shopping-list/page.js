'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';

import { getItems, addItem } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
    const { user } = useUserAuth();
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState('');
    const [loading, setLoading] = useState(true);

    // 🔄 Load from Firestore when user changes
    useEffect(() => {
        if (!user) {
            setItems([]);
            setLoading(false);
            return;
        }
        setLoading(true);
        const loadItems = async () => {
            const itemsFromDB = await getItems(user.uid);
            setItems(itemsFromDB);
            setLoading(false);
        };
        loadItems();
    }, [user]);

    // ➕ Add to Firestore
    const handleAddItem = async (item) => {
        if (!user) {
            console.error("User not logged in");
            return;
        }
        try {
            const id = await addItem(user.uid, item);
            const newItem = { ...item, id };
            setItems(prev => [newItem, ...prev]);
        } catch (error) {
            console.error("Firestore addItem error:", error);
        }
    };

    // 🍽️ Meal idea handling
    const handleItemSelect = (item) => {
        const cleanedName = item.name
            .split(',')[0]
            .replace(/[^\p{L}\s]/gu, '')
            .trim()
            .toLowerCase();
        setSelectedItemName(cleanedName);
    };

    return (
        <main className="bg-black text-white min-h-screen p-8">
            {!user ? (
                <section className="flex flex-col items-center justify-center min-h-[50vh]">
                    <p className="text-2xl font-bold mb-4">You need to log in!</p>
                    <Link href="/week-10" className="hover:text-blue-400">
                        Go to login page
                    </Link>
                </section>
            ) : loading ? (
                <p>Loading shopping list...</p>
            ) : (
                <>
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
                    <Link href="/week-10" className="hover:text-blue-400">
                        Back to login page
                    </Link>
                    <br />
                    <Link href="/" className="hover:text-blue-400">
                        Back to home
                    </Link>
                </>
            )}
        </main>
    );
}
