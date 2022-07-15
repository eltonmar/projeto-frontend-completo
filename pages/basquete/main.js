const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://free-nba.p.rapidapi.com/teams?page=0");
xhr.setRequestHeader("X-RapidAPI-Key", "1c6a960638msh8d1de2e4df34fccp1e825ajsn74b34fa9716e");
xhr.setRequestHeader("X-RapidAPI-Host", "free-nba.p.rapidapi.com");

xhr.send(data);