import React from 'react';
import {useLoaderData} from 'react-router-dom'

const SingleMeal = () => {
    const singleMealData = useLoaderData();
    console.log(singleMealData.meals)
    return (
        <div className='flex justify-center'>
            {
                singleMealData.meals.map(singleMeal => <div className='flex flex-col rounded-md justify-center p-2 bg-red-300  items-center w-[450px]'>
                    <img className='w-[400px] h-[250px] rounded-md' src={singleMeal.strMealThumb} alt="" />
                    <h1 className='text-2xl font-bold'>Name: {singleMeal.strMeal}</h1>
                    <p className='text-start p-2'>{singleMeal.strInstructions.slice(0,400)}</p>
                    <h1 className='text-xl font-bold'>Weight: {singleMeal.strMeasure3}</h1>
                </div>)
            }
        </div>
    );
};

export default SingleMeal;