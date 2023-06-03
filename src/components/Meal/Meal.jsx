import React from 'react';
import { Link } from 'react-router-dom';

const Meal = ({name, tags, area, category, img, id}) => {
    // console.log(name);
    // const {strTags, strMeal, strMealThumb, strCategory, strArea} = props;

    const url = `/restaurant/${id}`;
    return (
        <div className='border border-dark rounded p-2'>
            {/* <h2>Name: {name}</h2> */}
            <img src={img} alt="" width='250px'/>
            <h2>ItemName: {name}</h2>
            <h4>Tags: {tags}</h4>
            <h4>Category: {category}</h4>
            <h4>Place: {area}</h4>
            <Link className='text-decoration-none bg-info text-white p-1 rounded' to={url}>See more Details</Link>
            {/* <button className='rounded bg-warning'>See more details</button> */}
        </div>
    );
};

export default Meal;