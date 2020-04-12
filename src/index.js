// import "./styles.css";
// import $ from "jquery";

//import $ from "https://code.jquery.com/jquery-3.5.0.min.js";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use Parcel to bundle this sandbox, you can find more info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;
var auds = document.getElementsByClassName("audio");
function MyAudioSetSlow() {
  Array.from(auds).forEach(function(item) {
    item.playbackRate = 0.5;
  });
  //alert("Playback speed is set slow " + auds[0].playbackRate);
}
function MyAudioSetNormal() {
  Array.from(auds).forEach(function(item) {
    item.playbackRate = 1;
  });
  //alert("Playback speed is set normal " + auds[0].playbackRate);
}
// document
//   .getElementById("setSlowSpeed")
//   .addEventListener("click", MyAudioSetSlow);
// document
//   .getElementById("setNormalSpeed")
//   .addEventListener("click", MyAudioSetNormal);

// switch

var checkbox = document.querySelector('input[type="checkbox"]');

checkbox.addEventListener("change", function() {
  if (checkbox.checked) {
    //console.log("Checked");
    MyAudioSetSlow();
  } else {
    console.log("Not checked");
    MyAudioSetNormal();
  }
});

// switch

//sticky

function sticktothetop() {
  var window_top = $(window).scrollTop();
  var top = $("#stick-here").offset().top;
  if (window_top > top) {
    $("#stickThis").addClass("stick");
    $("#stick-here").height($("#stickThis").outerHeight());
    //$("#stick-here").height(22);
  } else {
    $("#stickThis").removeClass("stick");
    $("#stick-here").height(0);
  }
}
$(function() {
  $(window).scroll(sticktothetop);
  sticktothetop();
});

//sticky
