'use client';
import React, { useEffect, useState } from 'react';

async function fetchMealIdeas(ingredient) {
    if (!ingredient) return [];

    try {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const data = await response.json();
        return data.meals || []; // meals could be null if no results
    } catch (error) {
        console.error('Failed to fetch meal ideas:', error);
        return [];
    }
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    // Fetch data when `ingredient` changes
    useEffect(() => {
        async function loadMealIdeas() {
            const results = await fetchMealIdeas(ingredient);
            setMeals(results);
        }

        loadMealIdeas();
    }, [ingredient]);

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
                Meal Ideas for: <span className="capitalize">{ingredient}</span>
            </h2>

            {meals.length === 0 ? (
                <p className="text-gray-500 italic">No meal ideas found.</p>
            ) : (
                <ul className="space-y-3">
                    {meals.map((meal) => (
                        <li key={meal.idMeal} className="flex items-center space-x-4">
                            <img
                                src={meal.strMealThumb}
                                alt={meal.strMeal}
                                className="w-16 h-16 object-cover rounded"
                            />
                            <span className="font-medium text-gray-800">{meal.strMeal}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
