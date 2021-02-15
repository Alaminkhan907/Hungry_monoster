function callApi(meal) {
    const web = "https://www.themealdb.com/api/json/v1/1/search.php";
    const foodName = meal
    const url = `${web}?s=${foodName}`;
    //console.log(url);
     fetch(url)
      .then((res) => res.json())
      .then((data) => {data.meals.forEach(meal =>{
        console.log(meal.strMeal);
        const mealPhotoDiv =document.getElementById('meal-items');
        mealPhotoDiv.innerHTML =`
        <img src="${meal.strMealThumb}">
        <h5>${meal.strMeal}</h5>
        `
        })
      })
      .catch(error =>alert("Wrong Food Name"))
  }
  function getFoodName() {
    const inputFood = document.getElementById("input-food").value;
    console.log(inputFood);
    callApi(inputFood);
  }
    