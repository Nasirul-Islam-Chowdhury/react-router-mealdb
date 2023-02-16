import React from 'react';
import { Link } from 'react-router-dom';


const Meal = ({meal}) => {
    return (
        <div className='bg-red-300 p-4 rounded-md'>
            <img className='w-full h-60 rounded-lg' src={meal.strMealThumb} alt="" />
            <div>
            <h1 className='text-2xl font-semibold'>Name: {meal.strMeal}</h1>
            <h1 className='text-sm text-start'>{meal.strInstructions.slice(0,200)}</h1>
            <button className='px-5 py-2 mt-2 rounded-md bg-gray-800 text-white'><Link to={`/meal/${meal.idMeal}`}>Show Details</Link></button>
            </div>
        </div>

    );
};

export default Meal;