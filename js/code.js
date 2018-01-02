$(function () {
      $(window).scroll(function() {
     if($(window).scrollTop() >= 100) {
       $('header').addClass('scrolled');
     }
    else {
      $('header').removeClass('scrolled');
    }
  });
});

$('.logo-handle').on('click', function(){
	$('ul').toggleClass('show');
});

//Get Modal Element
var modal = document.getElementById('simpleModal');
//Get open modal button
var modalBtn = document.getElementById('modalBtn');
//Get close modal button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player('video', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {

  // bind events
  var playButton = document.getElementById("modalBtn");
  playButton.addEventListener("click", function() {
    player.playVideo();
  });

  var pauseButton = document.getElementsByClassName("closeBtn")[0];
  pauseButton.addEventListener("click", function() {
    player.pauseVideo();
  });

}


// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//Add event listener for open
modalBtn.addEventListener('click', openModal);
//Add event listener for close
closeBtn.addEventListener('click', closeModal);
//Add event listener for outside click
window.addEventListener('click', outsideClick);

//Modal opener function
function openModal(){
	modal.style.display = 'block';

}
//Modal close function
function closeModal(){
	modal.style.display = 'none';
}
//Modal close function outside
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
    player.pauseVideo();
  }
}
