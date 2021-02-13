function callApi(meal) {
    const web = "https://www.themealdb.com/api/json/v1/1/search.php";
    const foodName = meal
    const url = `${web}?s=${foodName}`;
    console.log(url);
     fetch(url)
      .then((res) => res.json())
      .then((data) => {
        displayMeals(data);
        
      })
      .catch(error =>alert("Wrong Food Name"))
  }
  function getFoodName() {
    const inputFood = document.getElementById("input-food").value;
    console.log(inputFood);
    callApi(inputFood);
  }
  function displayMeals(mealData){
      console.log(mealData);
      const foodName= mealData['meals'][0]['strMeal'];
      const foodPhoto = mealData['meals'][0]['strMealThumb'];
      console.log(foodPhoto);
      console.log(foodName);

  }