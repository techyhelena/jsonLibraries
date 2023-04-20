let memberContainer = document.getElementById("memberContainer");

// array of member info
let memberDatabase = [
{
	"name": "Kim Chaewon",
	"img_url": "img/chaewon.jpeg",
	"birthday": "August 1, 2000", 
	"birthplace": "Seoul, South Korea",
	"position": "Leader, Vocalist", 
	"mbti": "ISTP",
	"nationality": "Korean",
	"hobby": "Watching dramas"
},

{
	"name": "Miyawaki Sakura",
	"img_url": "img/sakura.jpeg",
	"birthday": "March 19, 1998", 
	"birthplace": "Kagoshima City, Japan",
	"position": "Vocalist", 
	"mbti": "INFJ",
	"nationality": "Japanese",
	"hobby": "Watching dramas and reading books"
},
{
	"name": "Huh Yunjin",
	"img_url": "img/yunjin.jpeg",
	"birthday": "October 8, 2001", 
	"birthplace": "Seoul, South Korea (grew up in New York)",
	"position": "Vocalist", 
	"mbti": "INTP",
	"nationality": "Korean-American",
	"hobby": "Watching movies and playing games."
}, 
{
	"name": "Nakamura Kazuha",
	"img_url": "img/kazuha.jpeg",
	"birthday": "August 9, 2003", 
	"birthplace": "Kochi, Japan (grew up in Osaka)",
	"position": "Sub-Vocalist, Rapper, Dancer", 
	"mbti": "INFP",
	"nationality": "Japanese",
	"hobby": "Watching Youtube video and internet shopping"
},

{
	"name": "Hong Eunchae",
	"img_url": "img/eunchae.jpeg",
	"birthday": "November 10, 2006", 
	"birthplace": "Miryang, South Korea",
	"position": "Vocalist, Lead Dancer, Maknae (Youngest)", 
	"mbti": "ISFJ",
	"nationality": "Korean",
	"hobby": "Watching performances and mukbang videos"
}
]

for(var i = 0; i < memberDatabase.length; i++) {
	updateInfo(memberDatabase[i]);
}

function updateInfo(incomingJSON) {
	// create whole content item div and set class
	let newContainer = document.createElement("DIV");
	// setting class name
	newContainer.classList.add("leftContainer");

	// heading
	let newContentHeading = document.createElement("H3");
	newContentHeading.classList.add("name");
	newContentHeading.innerText = incomingJSON['name'];
	// adding heading to div
	newContainer.appendChild(newContentHeading);

	// image
	let newContentImg = document.createElement("IMG");
	newContentImg.classList.add('memberPic');
	newContentImg.src = incomingJSON['img_url'];

	newContainer.appendChild(newContentImg);

	// adding a new div into the existing container
	memberContainer.appendChild(newContainer);

	// content 
	// let contentContainer = document.createElement("DIV");
	// contentContainer.classList.add("rightContainer");

	// memberContainer.appendChild(contentContainer);


	let newBirthday = document.createElement("P");
	newBirthday.classList.add("birthday");
	newBirthday.innerText = "Birthday: " + incomingJSON['birthday'];
	newContainer.appendChild(newBirthday);
	// contentContainer.appendChild(newBirthday); // adding p into new div
	newContainer.appendChild(newBirthday); // adding p into new div



	let newbirthPlace = document.createElement("P");
	newbirthPlace.classList.add("birthplace");
	newbirthPlace.innerText = "Birthplace: " + incomingJSON['birthplace'];
	// contentContainer.appendChild(newbirthPlace); // adding p into new div
	newContainer.appendChild(newbirthPlace); // adding p into new div

	let newMBTI = document.createElement("P");
	newMBTI.classList.add("mbti");
	newMBTI.innerText = "MBTI: " + incomingJSON['mbti'];
	// contentContainer.appendChild(newMBTI);
	newContainer.appendChild(newMBTI); // adding p into new div


	let newPosition = document.createElement("P");
	newPosition.classList.add("position");
	newPosition.innerText = "Position: " + incomingJSON['position'];
	// contentContainer.appendChild(newPosition);
	newContainer.appendChild(newPosition); // adding p into new div


	let newNationality = document.createElement("P");
	newNationality.classList.add("nationality");
	newNationality.innerText = "Nationality: " + incomingJSON['nationality'];
	// contentContainer.appendChild(newNationality);
	newContainer.appendChild(newNationality); // adding p into new div


	let newHobby = document.createElement("P");
	newHobby.classList.add("hobby");
	newHobby.innerText = "Hobby: " + incomingJSON['hobby'];
	// contentContainer.appendChild(newHobby);
	newContainer.appendChild(newHobby); // adding p into new div




}







