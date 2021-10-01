import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import './Meal.css'

const Meal = (props) => {
    const {idMeal,strMeal, strInstructions, strMealThumb} =props.meal;
    return (
        <div>

            <Card >
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>Meal: {strMeal}</Card.Title>
                    <Card.Title>{idMeal}</Card.Title>
                    <Card.Text>{strInstructions.slice(0, 100)}</Card.Text>
                </Card.Body>

            </Card>
        </div>

        
    );
};

export default Meal;