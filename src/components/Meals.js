import React, { useEffect, useState } from "react";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(
        "https://meals-project-react-bba08-default-rtdb.firebaseio.com/meals.json"
      );
      const data = await res.json();

      const objArr = [];
      for (const key in data) {
        const finalObj = {
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
          amount: data[key].amount,
        };
        objArr.push(finalObj);
      }
      setMeals(objArr);
    };
    fetcher();
    return () => {};
  }, []);
  return (
    <div>
      {meals.map((meal) => {
        return <AvailableMeals key={meal.id} meal={meal} />;
      })}
    </div>
  );
};

export default Meals;
