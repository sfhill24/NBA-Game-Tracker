//Header:
//1.Button for team 
//2.Button for sport
//3.Button to search team and sport
//4.Team logo on right hand side (from API)

//Past Game Scores:
//1.Call API to display the last 5 games scores. Template doesn’t specify.
//a.For Loop

//Upcoming Games:
//1.Call API to display the next 5 upcoming games
//a.For Loop


//Variables
var vsHeat = document.querySelector("#heat");
var vsHornets = document.querySelector("#hornets");
var vsRaptors = document.querySelector("#raptors");
var vsClippers = document.querySelector("#clippers");

heat.addEventListener("click", function (event) {
	event.preventDefault();

	fetch(`https://app.ticketmaster.com/discovery/v2/events.json?size=6&keyword=spurs vs heat&apikey=wh6hNHAFQqg0xxwg52Frr4SZbPwyuAd0`)
		.then(function (response) {
			console.log(response)
			return response.json();
		})
		.then(function (data) {
			window.location.href = data._embedded.events[0].url;
			//console.log(data._embedded.events[0].url);
		});
});

hornets.addEventListener("click", function (event) {
	event.preventDefault();

	fetch(`https://app.ticketmaster.com/discovery/v2/events.json?size=6&keyword=spurs vs hornets&apikey=wh6hNHAFQqg0xxwg52Frr4SZbPwyuAd0`)
		.then(function (response) {
			console.log(response)
			return response.json();
		})
		.then(function (data) {
			window.location.href = data._embedded.events[0].url;
			//console.log(data._embedded.events[0].url);
		});
	});

	raptors.addEventListener("click", function (event) {
		event.preventDefault();
	
		fetch(`https://app.ticketmaster.com/discovery/v2/events.json?size=6&keyword=spurs vs raptors&apikey=wh6hNHAFQqg0xxwg52Frr4SZbPwyuAd0`)
			.then(function (response) {
				console.log(response)
				return response.json();
			})
			.then(function (data) {
				window.location.href = data._embedded.events[0].url;
				//console.log(data._embedded.events[0].url);
			});
		});

		clippers.addEventListener("click", function (event) {
			event.preventDefault();
		
			fetch(`https://app.ticketmaster.com/discovery/v2/events.json?size=6&keyword=spurs vs clippers&apikey=wh6hNHAFQqg0xxwg52Frr4SZbPwyuAd0`)
				.then(function (response) {
					console.log(response)
					return response.json();
				})
				.then(function (data) {
					window.location.href = data._embedded.events[0].url;
					//console.log(data._embedded.events[0].url);
				});
			});


			var SearchBtn2 = document.querySelector("#submit-btn")

			SearchBtn2.addEventListener("click", function (event) {
				event.preventDefault();
			
				fetch(`https://app.ticketmaster.com/discovery/v2/events.json?size=6&keyword=spurs vs clippers&apikey=wh6hNHAFQqg0xxwg52Frr4SZbPwyuAd0`)
					.then(function (response) {
						console.log(response)
						return response.json();
					})
					.then(function (data) {
						window.location.href = data._embedded.events[0].url;
						//console.log(data._embedded.events[0].url);
					});
				});