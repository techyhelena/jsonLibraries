
let memberContainer = document.getElementById("memberContainer");

// array of member info
let memberDatabase = [
{
	"name": "Kim Chaewon",
	"img_url": "chaewon.jpeg",
	"birthday": "August 1, 2000", 
	"birthplace": "Seoul, South Korea",
	"position": "Leader, Vocalist", 
	"mbti": "ISTP",
	"nationality": "Korean",
	"hobby": "Watching dramas"
},

{
	"name": "Miyawaki Sakura",
	"img_url": "sakura.jpeg",
	"birthday": "March 19, 1998", 
	"birthplace": "Kagoshima City, Japan",
	"position": "Vocalist", 
	"mbti": "INFJ",
	"nationality": "Japanese",
	"hobby": "Watching dramas, reading books, guitar, and composing music"
},
{
	"name": "Huh Yunjin",
	"img_url": "yunjin.jpeg",
	"birthday": "October 8, 2001", 
	"birthplace": "Seoul, South Korea (grew up in New York)",
	"position": "Vocalist", 
	"mbti": "INTP",
	"nationality": "Korean-American",
	"hobby": "Watching movies and playing games."
}, 
{
	"name": "Nakamura Kazuha",
	"img_url": "kazuha.jpeg",
	"birthday": "August 9, 2003", 
	"birthplace": "Kochi, Japan (grew up in Osaka)",
	"position": "Sub-Vocalist, Rapper, Dancer", 
	"mbti": "INFP",
	"nationality": "Japanese",
	"hobby": "Watching Youtube video and internet shopping"
},

{
	"name": "Hong Eunchae",
	"img_url": "eunchae.jpeg",
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
	newContentImg.src = incomingJSON['image'];

	newContainer.appendChild(newContentImg);

	memberContainer.appendChild(newContainer);
}







