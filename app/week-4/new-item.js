'use client'; // Add this if you're using Next.js App Router (optional but safe)
import React, { useState } from 'react';

export default function NewItem() {
    const [count, setCount] = useState(1);

    const increment = () => {
        if (count < 20) {
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return (
        <div className='bg-white text-black p-2 w-45 rounded-lg shadow-lg flex items-center justify-between'>
            <p className='w-30 ml-2'>{count}</p>
            <button onClick={decrement} className="bg-blue-500 mr-2 text-white px-4 py-2 rounded hover:bg-blue-800  cursor-pointer">
                -</button>
            <button onClick={increment} className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-800  cursor-pointer">
                +</button>

        </div>
    );
}