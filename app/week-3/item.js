import React from 'react';

const Item = ({ name, quantity, category }) => {
    return (
        <li className="bg-blue-950 text-white p-4 rounded shadow mb-2 max-w-sm">
            <p className="font-bold text-xl "> {name}</p>
            <p className="text-sm">Buy {quantity} in {category}</p>
        </li>
    );
};

export default Item;
