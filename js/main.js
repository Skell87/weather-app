import axios from "axios";
console.log('main.js loaded');

    // have to set up an "if failed" for the weather api
    
    navigator.geolocation.getCurrentPosition((position) => {
        let latLong = [position.coords.latitude, position.coords.longitude];
        console.log('position', position)

        console.log('geolocation');

    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latLong[0]}&lon=${latLong[1]}&appid=58870a89a0e26793783ede860847d0fe`)
        .then((response) => {
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
             });
         });
     
      console.log('end')

      // markup and add event listeners prior to axios call.