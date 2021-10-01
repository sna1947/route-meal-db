import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Meal from '../Meal/Meal';

const Restaurant = () => {
    const [meals, setMeals] = useState([])
    const [searchText,setSearchText] = useState('')
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    },[searchText]);

    const handelSearchField =e=>{
        const searchTextValue =e.target.value;
        setSearchText(searchTextValue);
      };
    return (
        <div>
            <input onChange={handelSearchField} type='text' placeholder='search your favarite foods'/>
       
            <Row xs={1} md={4} lg={4} className="g-4 m-2">
                
                        {   
                        meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                        }
                
            </Row>
        </div>
        
    );
};

export default Restaurant;