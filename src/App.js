import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Restaurant from './components/Restaurant/Restaurant';
import Meal from './components/Meal/Meal';
import MealDetails from './components/MealDetails/MealDetails';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/restaurant'>
            <Restaurant></Restaurant>
          </Route>

          <Route path='/meal'>
              <Meal></Meal>
          </Route>

          <Route path='/mealdetails'>
              <MealDetails></MealDetails>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
