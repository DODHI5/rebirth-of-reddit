let redditJSON = new XMLHttpRequest();
redditJSON.addEventListener("load", motorCycle);
redditJSON.open("GET", "https://www.reddit.com/r/ducati.json");
redditJSON.send();

function motorCycle() {

  let mcInfo = JSON.parse(this.response);
  let motorCycle = mcInfo.data.children;
  // let MC2 = motorCycle.data.preview;
  // console.log(motorCycle.data.preview.images);
 
  motorCycle.forEach(function(element, index, array) {
    let createMC = document.createElement("li"); 
    createMC.className = "motor";
    document.getElementById("mcpage").appendChild(createMC);
    
    let mcThumbNail = document.createElement("img");
    mcThumbNail.className = "thumbnail";
    mcThumbNail.setAttribute('src',element.data.url);
    mcThumbNail.onerror = function () {
      mcThumbNail.src = 'http://lorempixel.com/400/250/transport/';
    }
    createMC.appendChild(mcThumbNail);

    let mcTitle = document.createElement("h2"); 
    mcTitle.className = "mcTitle";
    mcTitle.innerText = element.data.title;
    createMC.appendChild(mcTitle);
    
    let mcAuthor = document.createElement("h3");
    mcAuthor.className = "Author";
    mcAuthor.innerText =  element.data.author;
    createMC.appendChild(mcAuthor);

    

    let mcScore = document.createElement("h3");
    mcScore.className = "score";
    mcScore.innerText = 'Score: '+ element.data.score;
    createMC.appendChild(mcScore);

    let mcDisplay = document.createElement("h3");
    mcDisplay.className = "display";
    mcDisplay.innerText =  element.data.selftext;
    createMC.appendChild(mcDisplay);
    // console.log(element.data.preview.images[0].source)
  })}


//     let filmPlanets = element.planets;


//     filmPlanets.forEach(function(element, index, array) {
//       let reqPlanets = new XMLHttpRequest();
//       reqPlanets.addEventListener("load", planets);
//       reqPlanets.open("GET", element);
//       reqPlanets.send();

//       function planets() {
//         console.log(this.response);
//         let formatPlanets = JSON.parse(this.response);
//         let planetName = formatPlanets.name;

//         let createPlanets = document.createElement("li");
//         createPlanets.className = "planet";
//         createFilmPlanets.appendChild(createPlanets);
//         let createPlanetName = document.createElement("h4");
//         createPlanetName.className = "planetName";
//         createPlanets.appendChild(createPlanetName);
//         createPlanetName.innerText = planetName;
//       }
//     })
//   }) 
// }