const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://password-generator1.p.rapidapi.com/api/generePassWd',
  params: {len: '<10>'},
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'password-generator1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

