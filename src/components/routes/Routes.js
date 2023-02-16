import { createBrowserRouter } from "react-router-dom";
import Meals from "../Meals/Meals";
import SingleMeal from "../singleMeal/SingleMeal";

export const router = createBrowserRouter([
    {
        path:'/',
        loader: async() =>{
            return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
        },
        element: <Meals></Meals>
    },
     {
        path:'/meal/:idMeal',
        loader: async({params}) =>{
            return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`)
        },
        element: <SingleMeal></SingleMeal>
    }
])