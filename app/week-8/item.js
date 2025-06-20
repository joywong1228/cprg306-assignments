'use client';
import React from 'react';

const Item = ({ name, quantity, category, onSelect }) => {
    return (
        <li
            onClick={() => onSelect && onSelect({ name, quantity, category })}
            className="bg-blue-950 text-white p-4 rounded shadow mb-2 max-w-sm cursor-pointer hover:bg-blue-800 transition"
        >
            <p className="font-bold text-xl">{name}</p>
            <p className="text-sm">Buy {quantity} in {category}</p>
        </li>
    );
};

export default Item;
