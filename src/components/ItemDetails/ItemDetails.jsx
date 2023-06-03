import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ItemDetails.css';

const ItemDetails = () => {
    const {id} = useParams();
    const [meal, setMeal] = useState([]);

    console.log(meal);
    useEffect( ()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data =>  setMeal(data.meals[0]))
    }, [])
    console.log('meal',meal);
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className='d-flex justify-content-center align-items-center item-details'>
            <div className='border border-gray p-3'>
            <h2>{meal.length}</h2>
            <img src={meal.strMealThumb} alt="" className='rounded' width='250px' />
            <h2>{meal.strMeal}</h2>
            <h4>{meal.strCategory} dish</h4>
            <h5>Tags: {meal.strTags}</h5>
            <h5>{meal.strArea} Food</h5>
            <a className='text-decoration-none' href={meal.strSource}>Source of the Dish</a>
            <p><span className='fw-bold'>Item Description:</span> {meal.strInstructions}</p>
            <Link className='text-decoration-none bg-primary text-white p-1 rounded' to='/restaurant'>Back to Restaurant</Link>
            </div>
        </div>
        </div>
    );
};

export default ItemDetails;