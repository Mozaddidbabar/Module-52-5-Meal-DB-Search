import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import './Restaurant.css';
import Meal from '../Meal/Meal';

const Restaurant = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect( () =>{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    }, [searchText])
    const handleSearchText = e =>{
        setSearchText(e.target.value);
    }
    return (
        <div className='text-center'>
            <Header></Header>
            <h2>Restaurant</h2>
            <input type="text" onChange={handleSearchText} placeholder='Search items'/>
            {/* <h2>meals: {meals.length}</h2> */}
           <div className='meals-container'>
            {
                meals.map(meal => <Meal
                    key={meal.idMeal}
                    id={meal.idMeal}
                    name={meal.strMeal}
                    img={meal.strMealThumb}
                    tags={meal.strTags}
                    area={meal.strArea}
                    category={meal.strCategory}
                    ></Meal>)
            }
           </div>
        </div>
    );
};

export default Restaurant;