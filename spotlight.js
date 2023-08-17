// recordList is a list of vinyl records and their information, saved as an object 
let recordList = [
    {
        artist: "The Beatles",
        album: "Abbey Road",
        genre: "Rock",
        year: 1969,
        cover: "images/record-1.jpg"
    },
];

// Add a new record to the list
recordList.push({ artist: "The Beatles", album: "Sgt. Pepper's Lonely Hearts Club Band", genre: "Rock", year: 1967, cover: "images/record-2.jpg" });
recordList.push({ artist: "The Beatles", album: "Revolver", genre: "Rock", year: 1966, cover: "images/record-3.jpg" });
recordList.push({ artist: "The Beatles", album: "Rubber Soul", genre: "Rock", year: 1965, cover: "images/record-4.jpg" });
recordList.push({ artist: "The Beatles", album: "Help!", genre: "Rock", year: 1965, cover: "images/record-5.jpg" });
recordList.push({ artist: "The Beatles", album: "A Hard Day's Night", genre: "Rock", year: 1964, cover: "images/record-6.jpg" });

// on document load, add the records to the page insie ul.record-list
window.onload = function () {
    document.getElementById("record-list").innerHTML = "";
    for (let i = 0; i < recordList.length; i++) {
        document.getElementById("record-list").innerHTML += "<li class='record' id='record_"+i+"'>" + "<div class='record-cover'><img class='cover' src='" + recordList[i].cover + "'><div class='disc'><img class='sticker' src='" + recordList[i].cover + "'><img class='vinyl' src='images/vinyl_trans.png'></div></div>" + "<div class='record-info'><h2 class='record-title'>" + recordList[i].album + "</h2><h3 class='record-artist'>" + recordList[i].artist + "</h3><p class='record-genre'>" + recordList[i].genre + "</p><p class='record-year'>" + recordList[i].year + "</p><div class='button_actions'><button class='button_listen' onclick='playTrack("+i+")'>Listen</button><button class='button_buy'>Buy</button></div></div></li>";
    }





// Animate the record covers when it enters view
const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {

        // if the element is more than 50% visible in the viewport then add the class 'inView'
        
            entry.target.classList.add('inView');
               
        
      }else{
        entry.target.classList.remove('inView');
      }
    });
  });
  

  //observe the li.record elements and animate them when they enter the viewport
    const elements = document.querySelectorAll('li.record');
    elements.forEach(el => {
        observer.observe(el);
        });  

}

// Play the track when the listen button is clicked
function playTrack(i) {

    //remove cover from view by sliding it out of viewport on the left
    cover = document.getElementById("record_"+i).querySelector("img.cover");
    cover.classList.add("slide-out");

    // increase the size of the disc
    disc = document.getElementById("record_"+i).querySelector("div.disc");
    disc.classList.add("play");

}