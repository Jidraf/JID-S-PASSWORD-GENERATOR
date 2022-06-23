const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4083b14d06mshbb751c1f7884d46p1122b2jsn8e766c5d89d3',
		'X-RapidAPI-Host': 'password-generator1.p.rapidapi.com'
	}
};

fetch('https://password-generator1.p.rapidapi.com/api/generePassWd?len=10', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

  console.log("okay")



 