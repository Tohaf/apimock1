/*

var form = document.getElementById("form")

form.addEventListener('submit', function(e){
 	e.preventDefault()

 	var user = document.getElementById("user").value
 	var error = document.getElementById("error")
 	handleResponse()

    fetch("http://api.github.com/users/"+user)
    .then((result) => result.json())
    .then((data)  => {
    	console.log(data)
    	if(data.ok){
    		location.href = "API2.html"
    	}
    

    	document.getElementById("hi").innerHTML = `
    	    <img src="${data.avatar_url}"/>

    	`
    	document.getElementById("User1").innerHTML = ("username: "+ data.login)

    
    })

    

    function handleResponse(data){
    	if(data){
    		location.href = "API2.html"
        }

    }
    
})		    



var myForm = document.getElementById("form");
var myError = document.getElementById("error");
var mySubmit = document.getElementById("btn");
var user = document.getElementById("user");
var username = document.getElementById("Username");
var follow = document.getElementById("follow");
var follo = document.getElementById("follo");
var pub = document.getElementById("pub");
requestData = null;


mySubmit.addEventListener('click', (e) =>{
	e.preventDefault();
	
	var xhr = new XMLHttpRequest();

	xhr.onload = function(){
	    let responseObject = null;

	    try {
	    	responseObject = JSON.parse(xhr.responseText);
	    }catch (e) {
	    	console.error('could not parse JSON');
	    }
	    if(responseObject){
	    	handleResponse(responseObject);
	    }
		       
	};

	var requestData = user.value;
	console.log(requestData);

    username.innerHTML ='requestData';
	follow.innerHTML = 'requestData.followers';
	follo.innerHTML = 'requestData.follo';
    pub.innerHTML = 'requestData.pub';

	xhr.open('GET','https://api.github.com/users/'+requestData);
	xhr.send(requestData);

} );



function handleResponse(responseObject){
	if (responseObject.ok){
		location.href = 'API2.html';
	}

};


*/

var xhr = new XMLHttpRequest();
var play = new XMLHttpRequest();
var myPlay;
var myStuff;


xhr.open('GET', 'http://api.github.com/users/xxxxxx', 'true');
xhr.responseType = 'text';
xhr.send();

xhr.onload = function(){
	if(xhr.status == 200){
	    myStuff = JSON.parse(xhr.responseText);
		console.log(myStuff);

		document.getElementById("follow").innerHTML ="followers: " + myStuff.followers;
		document.getElementById("follo").innerHTML ="following: " + myStuff.following;
		document.getElementById("pub").innerHTML ="public_repos: " + myStuff.public_repos;
		document.getElementById("Username").innerHTML ="username: " + myStuff.login;
		
	
	}	
};
var myForm = document.getElementById("form");
var myError = document.getElementById("error");

		
function nam(){
	if(myform.name == ""){
		myError.innerHTML = "form not filled";
	}
	else{
		myError.innerHTML = "";
	}
};



play.open('GET', 'http://api.github.com/users/user' , 'true');
play.responseType = 'text';
play.send();

play.onload = function(){
	if(play.status == 200){
	    myPlay = JSON.parse(play.responseText);
		console.log(myPlay);
		document.getElementById("follow1").innerHTML ="followers: " + myPlay.followers;
		document.getElementById("follo1").innerHTML ="following: " + myPlay.following;
		document.getElementById("pub1").innerHTML ="public_repos: " + myPlay.public_repos;
		document.getElementById("User1").innerHTML ="username: " + myPlay.login;
        
		function player(){
	        var Form1 = document.getElementById("form1");
	        var user1 = document.getElementById("user1").value;
    
        };		
		
	}
};

function valid(){
    let massages =[];
    if (user1.value == ""){
    	massages.push("username is required");
    }	
    	       
};
















