function callApi(meal) {
    const web = "https://www.themealdb.com/api/json/v1/1/search.php";
    const foodName = meal
    const url = `${web}?s=${foodName}`;
    //console.log(url);
     fetch(url)
      .then((res) => res.json())
      .then((data) => {
        foodMenu(data)
      })
      .catch(error =>alert("Wrong Food Name"))
  }
  function getFoodName() {
    const inputFood = document.getElementById("input-food").value;
    console.log(inputFood);
    callApi(inputFood);
  }
  function foodMenu(data){
    const foodName =document.getElementById("meal-items");
    data.meals.forEach(meal =>{
      console.log(meal.strMeal);
      let mealItemsDiv = document.createElement('div');
      console.log(mealItemsDiv);
      mealItemsDiv.className = 'col-md-3 item-columns';
      console.log(mealItemsDiv.className);
      let cardHtml = `
      <div class="card rounded-3 border-0">
      <img src = "${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
          <h5 class="text-center">${meal.strMeal}</h5>
      </div>`;
      mealItemsDiv.innerHTML = cardHtml;
      foodName.appendChild(mealItemsDiv);
      })
  }
    