"use client";

import React, { useState } from "react";
import Link from "next/link";

import { useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const { user } = useUserAuth();

  const [items, setItems] = useState(
    itemsData.map((item, index) => ({ ...item, id: Date.now() + index }))
  );

  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (item) => {
    const newItem = { ...item, id: Date.now() };
    setItems((prev) => [newItem, ...prev]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .replace(/[^\p{L}\s]/gu, "")
      .trim()
      .toLowerCase();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="bg-black text-white min-h-screen p-8">
      {!user ? (
        <section className="flex flex-col items-center justify-center min-h-[50vh]">
          <p className="text-2xl font-bold mb-4">You need to log in!</p>
          <Link href="/week-9" className="hover:text-blue-400">
            Go to login page
          </Link>
        </section>
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
          <Link href="/week-9" className="hover:text-blue-400">
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
