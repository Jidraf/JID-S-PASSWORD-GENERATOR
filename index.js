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

var password = document.getElementById("password");

function genpassword() {
        var chars = 
"0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var passwordLength = 10;
        var password = "";
        for (var i = 0; i <= passwordLength; i++)
        {
          var randomNumber = Math.floor(Math.random() * chars.length);
          password += chars.substring(randomNumber, randomNumber +1);
        }        
        document.getElementById("password").value = password;
}
    function gencopy() {
      var copyText = document.getElementById("password");
      copyText.select();
      copyText.setSelectionRange(0, 999);
      document.execCommand("copy");
      
    }
 