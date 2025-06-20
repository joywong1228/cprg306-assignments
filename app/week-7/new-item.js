'use client'; // Add this if you're using Next.js App Router (optional but safe)
import React, { useState } from 'react';

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('produce');
    const [quantity, setCount] = useState(1);

    const increment = () => {
        if (quantity < 20) {
            setCount(quantity + 1);
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setCount(quantity - 1);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onAddItem({ name, category, quantity });

        setName('');
        setCategory('produce');
        setCount(1);
    };


    return (
        <form
            onSubmit={handleSubmit}
            className={`bg-gray-900 p-6 rounded-lg w-[400px] space-y-4 shadow-lg text-white mb-5`}
        >
            <div>
                <input
                    type="text"
                    placeholder="Enter item name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-white text-black w-full px-4 py-2 border rounded h-13"
                    required
                />
            </div>
            <div className="flex space-x-4">
                {/* quantity */}
                <div className="bg-white text-black p-2 rounded-lg shadow-lg flex items-center justify-between w-1/2">
                    <p className='ml-2 w-6 text-center'>{quantity}</p>
                    <button
                        type="button"
                        onClick={decrement}
                        className={` px-4 py-2 rounded ml-9 ${quantity <= 1
                            ? 'bg-gray-300 text-gray-500'
                            : 'bg-blue-500 text-white hover:bg-blue-800  cursor-pointer'
                            }`}
                    >
                        -
                    </button>
                    <button
                        onClick={increment}
                        className={`ml-2
                    ${quantity >= 20
                                ? 'bg-gray-300 mr-2 text-white px-4 py-2 rounded'
                                : 'bg-blue-500 text-white px-4 py-2 rounded mr-2 cursor-pointer hover:bg-blue-800 '}`}
                    >
                        +
                    </button>
                    {/* produce */}
                </div>
                <div className="bg-white text-black p-2 rounded-lg shadow-lg w-1/2">
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-2 py-1 justify-center text-black bg-white  h-9"
                    >
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen goods">Frozen Goods</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>
            <div className='flex justify-center'>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-800  cursor-pointer"> Add Item</button>
            </div>
        </form>
    );
}
