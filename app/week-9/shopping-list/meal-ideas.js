'use client';
import React, { useEffect, useState } from 'react';

// Fetch meals by ingredient
async function fetchMealIdeas(ingredient) {
    if (!ingredient) return [];
    try {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const data = await response.json();
        return data.meals || [];
    } catch (error) {
        console.error('Failed to fetch meal ideas:', error);
        return [];
    }
}

// Fetch full meal details (with ingredients)
async function fetchMealDetails(mealId) {
    try {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        );
        const data = await response.json();
        return data.meals ? data.meals[0] : null;
    } catch (error) {
        console.error('Failed to fetch meal details:', error);
        return null;
    }
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState(null);

    // Fetch meal list on ingredient change
    useEffect(() => {
        async function loadMealIdeas() {
            setSelectedMeal(null); // clear previous selection
            const results = await fetchMealIdeas(ingredient);
            setMeals(results);
        }

        loadMealIdeas();
    }, [ingredient]);

    // Handle click on meal
    async function handleMealClick(mealId) {
        const mealDetails = await fetchMealDetails(mealId);
        setSelectedMeal(mealDetails);
    }

    // Extract ingredients from selected meal
    function renderIngredients(meal) {
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient && ingredient.trim() !== '') {
                ingredients.push(`${measure} ${ingredient}`);
            }
        }
        return (
            <ul className="mt-2 list-disc list-inside text-sm text-gray-700">
                {ingredients.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        );
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
                Meal Ideas for: <span className="capitalize">{ingredient}</span>
            </h2>

            {meals.length === 0 ? (
                <p className="text-gray-500 italic">No meal ideas found.</p>
            ) : (
                <ul className="space-y-4">
                    {meals.map((meal) => (
                        <li
                            key={meal.idMeal}
                            className="cursor-pointer p-2 rounded-md border hover:bg-gray-100"
                            onClick={() => handleMealClick(meal.idMeal)}
                        >
                            <div className="flex items-center space-x-4">
                                <img
                                    src={meal.strMealThumb}
                                    alt={meal.strMeal}
                                    className="w-16 h-16 object-cover rounded"
                                />
                                <span className="font-medium text-gray-800">{meal.strMeal}</span>
                            </div>

                            {/* Show ingredients if this is the selected meal */}
                            {selectedMeal?.idMeal === meal.idMeal && (
                                <div className="ml-20 mt-2">
                                    <h3 className="font-semibold text-gray-700">Ingredients:</h3>
                                    {renderIngredients(selectedMeal)}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
