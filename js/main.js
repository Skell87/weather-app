import axios from "axios";
console.log('main.js loaded');
    // get weather button as a constant, creating a 'button' element in our document.
// const weatherButton = document.createElement('button');
// weatherButton.classList.add('weatherButtonStyle');

    // the text content of the button is get weather.
// weatherButton.textContent = 'Get Weather.';
    // this appends the button to the child of body
// document.body.appendChild(weatherButton);

// this is the app body design.
const mainBody = document.createElement('div');
mainBody.classList.add('mainBodyStyle');
document.body.append(mainBody);

// first div for city box
const cityBox = document.createElement('div');
cityBox.classList.add('cityBoxStyle');
mainBody.append(cityBox);

// this is the tag that says "city" in orange
const cityTag = document.createElement('div');
cityTag.textContent ='City.';
cityTag.classList.add('cityTagStyle');
cityBox.append(cityTag);


// this is the input for the city 
const cityInput = document.createElement('div');
cityInput.classList.add('cityInputStyle');
cityBox.append(cityInput);


// this is the parent temp box
const tempBox = document.createElement('div');
tempBox.classList.add('tempBoxStyle');
mainBody.append(tempBox);

//this is the tag that says "temperature" in orange
const tempTag = document.createElement('div');
tempTag.textContent ="Temperature.";
tempTag.classList.add('tempTagStyle');
tempBox.append(tempTag);

//this is a box justifier for the 3 temp boxes
const tempJustifier = document.createElement('div');
tempJustifier.classList.add('tempJustifierStyle');
tempBox.append(tempJustifier);

//this is the kelvin box.
const kelvinBox = document.createElement('div');
kelvinBox.classList.add('kelvinBoxStyle');
tempJustifier.append(kelvinBox);

const fahrenheitBox = document.createElement('div');
fahrenheitBox.classList.add('fahrenheitBoxStyle');
tempJustifier.append(fahrenheitBox);

const celsiusBox = document.createElement('div');
celsiusBox.classList.add('celsiusBoxStyle');
tempJustifier.append(celsiusBox);

// condition 
const conditionBox = document.createElement('div');
conditionBox.classList.add('conditionBoxStyle');
mainBody.append(conditionBox);

const conditionTag = document.createElement('div');
conditionTag.textContent = "Condition.";
conditionTag.classList.add('conditionTagStyle');
conditionBox.append(conditionTag);

const conditionInput = document.createElement('div');
conditionInput.classList.add('conditionInputStyle');
conditionBox.append(conditionInput);

// other info
const infoBox = document.createElement('div');
infoBox.classList.add('infoBoxStyle');
mainBody.append(infoBox);

const infoBoxTag = document.createElement('div');
infoBoxTag.textContent = "Logo."
infoBoxTag.classList.add('infoBoxTagStyle');
infoBox.append(infoBoxTag);

const infoBoxContent = document.createElement('div');
infoBoxContent.className = "infoBoxContentClass";
infoBoxContent.id = "infoBoxId";
infoBoxContent.classList.add('infoBoxContentStyle');
infoBox.append(infoBoxContent);

const imageElement = document.createElement('img');
imageElement.classList.add('imageElementStyle');
infoBoxContent.append(imageElement);



// geolocator and weather api.
    
    navigator.geolocation.getCurrentPosition((position) => {
        let latLong = [position.coords.latitude, position.coords.longitude];
        console.log('position', position)

        console.log('geolocation');

    axios.get(`https://api.openweathermap.org/geo/1.0/reverse?lat=${latLong[0]}&lon=${latLong[1]}&limit=${1}&appid=58870a89a0e26793783ede860847d0fe`)
    .then((response) => {
        console.log('lat long', response.data[0].name)
        cityInput.textContent = response.data[0].name;
    })

    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latLong[0]}&lon=${latLong[1]}&appid=58870a89a0e26793783ede860847d0fe`)
        .then((response) => {
            console.log(response.data);
            console.log('this is temp',response.data.main.temp);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
            console.log("here")
            
            kelvinBox.textContent = (`${Math.floor(response.data.main.temp)} K`);
            fahrenheitBox.textContent = (`${Math.floor((response.data.main.temp-273.15) * 9/5 + 32)} F`);
            celsiusBox.textContent = (`${Math.floor(response.data.main.temp - 273.15)} C`);
            conditionInput.textContent = (`${response.data.weather[0].description}`);

            let icon = (response.data.weather[0].icon);
            // console.log (icon);
            // console.log (infoBoxContent.textContent = (`https://openweathermap.org/img/wn/${icon}@2x.png`))
            imageElement.src = `https://openweathermap.org/img/wn/${icon}@2x.png`
            
            console.log('were not here') 
             });
         });
     
      console.log('end')

      
  
  
 