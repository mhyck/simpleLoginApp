// button fucntion
function getInfo() {
	var username = document.getElementById("username").value
	var password = document.getElementById("password").value
	for (var i = 0; i < userArray.length; i++) {
		if(username == userArray[i].username && password == userArray[i].password)
		{
			console.log(username + " is logged in!")
			document.getElementById("message").innerHTML = "You are logged in!"
			return
		}else {
			document.getElementById("message").innerHTML = "Sorry we did not recognize you please try again"
		}
	}
	console.log("Incorrect username or password")
}
// existing users
var userArray = [
	{
		username: "zach",
		password: "vocals"
	},
	{
		username: "tom",
		password: "guitars"
	},
	{
		username: "timmy",
		password: "bass"
	},
	{
		username: "brad",
		password: "drums"
	}
]


