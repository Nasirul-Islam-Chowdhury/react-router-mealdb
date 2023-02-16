import React from 'react';
import {useLoaderData} from 'react-router-dom'
import Meal from '../meal/Meal';

const Meals = () => {
    const meals = useLoaderData();
    return (
        <div className='grid md:grid-cols-3 gap-5 px-20'>
           {
                meals.meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
            }
        </div>
    );
};

export default Meals;