function callApi(meal) {
    // const web = "http://api.openweathermap.org/data/2.5/weather";
    // const key = "108cf238dd5beb2cab700ba003f03797";
    // const url = `${web}?q=${city}&appid=${key}`;
     fetch('https://www.themealdb.com/images/ingredients/Lime.png')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        
      })
      .catch(error =>alert("Wrong Food Name"))
  }
  function getFoodName() {
    const inputFood = document.getElementById("input-food").value;
    console.log(inputFood);
    callApi(inputFood);
  }