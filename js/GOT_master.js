(() => {
  // variable stack here -> the elements you want to interact with
  let sigilButtons = document.querySelectorAll(".sigilContainer"),
      lightBox = document.querySelector(".lightbox"),
      houseVideo = lightBox.querySelector("video"),
      closeButton = lightBox.querySelector(".close-button"),
      currentHouseName = document.querySelector("h1"),
      houseDescription = document.querySelector(".house-info"),
      playButt = document.querySelector(".playButt"),
      pauseButt = document.querySelector(".pauseButt"),
      rewindButt = document.querySelector(".rewindButt"),
      videoElement = document.querySelector('video');

  const houseData = [
    ["Stark", `House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell.
    It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest,
    as well as during the War of the Five Kings and Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.`],

    ["Baratheon", `House Baratheon of Storm's End is a legally extinct Great House of Westeros. A cadet branch was formerly the royal house,
    but House Lannister now controls the throne. House Baratheon traditionally ruled the Stormlands on the eastern coast of Westeros, aptly named
    for its frequent storms, from their seat of Storm's End.

    House Baratheon became the royal house of the Seven Kingdoms after Robert Baratheon led a rebellion against the Targaryen dynasty. At the end of
    the rebellion, Robert ascended the Iron Throne as Robert I and married Cersei Lannister after the death of Lyanna Stark.`],

    ["Lannister", `House Lannister of Casterly Rock is one of the Great Houses of Westeros, one of its richest and most powerful families and oldest dynasties.
    It is also the current royal house of the Seven Kingdoms following the extinction of House Baratheon of King's Landing, which had been their puppet house anyway.

    The Lannisters rule over the Westerlands. Their seat is Casterly Rock, a massive rocky promontory overlooking the Sunset Sea which has had habitations and fortifications
    built into it over the millennia. They are the Lords Paramount of the Westerlands and Wardens of the West. As the new royal house, they also rule directly over the Crownlands
    from their seat of the Red Keep in King's Landing, the traditional seat of the royal family.`],

    ["GREYJOY", `House Greyjoy of Pyke is one of the Great Houses of Westeros. It rules over the Iron Islands, a harsh and bleak collection of islands off the west coast of Westeros,
    from the castle at Pyke. The head of the house is the Lord Reaper of Pyke.

    House Greyjoy's sigil is traditionally a golden kraken on a black field. Their house words are "We Do Not Sow," although the phrase "What Is Dead May Never Die" .
    is also closely associated with House Greyjoy and their bannermen, as they are associated with the faith of the Drowned God. `],

    ["TULLY", `House Tully of Riverrun is an exiled Great House of Westeros. Its most senior member carried the title of Lord of Riverrun and Lord Paramount of the Trident,
    until the Red Wedding. The current head is Lord Edmure Tully, son of the late Hoster Tully. The Tully sigil is a silver trout on a red and blue background. Their house words are
     "Family, Duty, Honor."`],

    ["ARRYN", `House Arryn of the Eyrie is one of the Great Houses of Westeros. It has ruled over the Vale of Arryn for millennia, originally as the Kings of Mountain
     and Vale and more recently as Lords Paramount of the Vale and Wardens of the East under the Targaryen kings and Baratheon-Lannister kings. The nominal head of House
     Arryn is Robin Arryn, the Lord of the Eyrie, with his stepfather Petyr Baelish acting as Lord Protector until he reaches the age of majority.`],

    ["TARGERYEN", `
    House Targaryen of Dragonstone is a Great House of Westeros and was the ruling royal House of the Seven Kingdoms for three centuries since it conquered and unified the realm,
    before it was deposed during Robert's Rebellion and House Baratheon replaced it as the new royal House. The few surviving Targaryens fled into exile to the Free Cities of Essos
    across the Narrow Sea. Currently based on Dragonstone off of the eastern coast of Westeros, House Targaryen seeks to retake the Seven Kingdoms from House Lannister, who formally
    replaced House Baratheon as the royal House following the destruction of the Great Sept of Baelor.`],

    ["Freys", `
    House Frey of the Twins was the Great House of the Riverlands, having gained their position for their treachery against their former liege lords, House Tully, who were stripped
    of all their lands and titles for their rebellion against the Iron Throne; House Tully had supported the independence movement for the Kingdom of the North. The current head of
    the house is unknown following the assassinations of Lord Walder Frey and two of his sons, Lothar Frey and Walder Rivers, by the vengeful Arya Stark. This is made more complex
    by the subsequent assassination of all the male Freys soon after.`]
    ];

  // functions go in the middle -> what do we want our app to do?
  function showLightBox() {
    // debugger;
    //retrieve the CSS class that matches the video name in the video folder
    let houseName = this.className.split(" ")[1];

    // capitalize the first letter of the house name with JavaScript
    // and then add the rest of the house name to it

    let newSource = houseName.charAt(0).toUpperCase() + houseName.slice(1);

    // use this variable to populate the element on the page
    currentHouseName.textContent = `House ${houseData[this.dataset.offset][0]}`;

    // this variable is pointing at the paragraph tag under the h1 -> this is the house description
    houseDescription.textContent = `${houseData[this.dataset.offset][1]}`;

    let targetSource = `video/House-${houseName}.mp4`;
    //debugger;

    // show the lightbox on a click
    lightBox.classList.add("show-lightbox");
    // play the lightbox video when it opens
    houseVideo.src = targetSource;
    houseVideo.load();
    houseVideo.play();
  }

  function hidelightBox() {
    lightBox.classList.remove("show-lightbox");
  }

  let globalPaused=false;

  function playVideo(){

   //try to fix pause play BUG
   //a return statement kills your code execution here-dont go past this point
   if(globalPaused){
     console.log('paused');
     //if our audio is paused,then just play the track and exit
     resumeVideo();
     return;
   }

  //debugger;
  let videoSource=this.dataset.trackref;
  //set the audio source
  videoElement.src=`video/${videoSource}.mp4`;
  //load  and play it
   videoElement.load();
   videoElement.play();
   //playVideo();
}

  function resumeVideo(){
      globalPaused=false;
      videoElement.play();
  }

  function pauseVideo() {
    videoElement.pause();
    globalPaused=true;
  }

  function rewindVideo() {
    videoElement.currentTime=0;
  }

  // event handling for our sigilButtons
  sigilButtons.forEach(button => button.addEventListener("click", showLightBox));

  // add some event handling for the lightbox
  closeButton.addEventListener("click", hidelightBox);

  // for video vidControls
  playButt.forEach(button => button.addEventListener("click",playVideo));
  pauseButt.forEach(button => button.addEventListener("click",pauseVideo));
  rewindButt.forEach(button => button.addEventListener("click",rewindVideo));
})();
