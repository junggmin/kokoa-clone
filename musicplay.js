var youtubePlayer;
var check1 = document.getElementById("chk1");
var check2 = document.getElementById("chk2");
var check3 = document.getElementById("chk3");
var check4 = document.getElementById("chk4");
var list__tag = document.querySelector(".music-info__now__name-second");
var sel1 = document.querySelector(".music-info__list__li:nth-child(1)");
var sel2 = document.querySelector(".music-info__list__li:nth-child(2)");
var sel3 = document.querySelector(".music-info__list__li:nth-child(3)");
var sel4 = document.querySelector(".music-info__list__li:nth-child(4)");
var checkbox = document.querySelector("input[id=stop]");
sel2.style.opacity = 0.2;
sel3.style.opacity = 0.2;
sel4.style.opacity = 0.2;
var btn2 = document.querySelector("#playbtn");

btn2.className = "fas fa-play";
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
//kenchoi.tistory.com/13 [Purple Programming:티스토리]

var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  youtubePlayer = new YT.Player("player", {
    width: "0",
    height: "0",
    videoId: "dBEMRqo2hAM",
    playerVars: {
      rel: 0, //관련영상 표시하지 않기.
    },
    events: {},
  });
}

var done = false;
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING && !done) {
    // setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  youtubePlayer.stopVideo();
}

function playVideo() {
  youtubePlayer.playVideo(); //재생
}
function pauseVideo() {
  youtubePlayer.pauseVideo();
}

//uxicode.tistory.com/entry/youtube-api-를-이용한-playstop [세줄코딩:티스토리]
check1.addEventListener("change", function (event) {
  btn2.className = "fas fa-pause";
  list__tag.innerText = "시간지기 쿠키의 도전";
  sel1.style.opacity = 1;
  sel2.style.opacity = 0.2;
  sel3.style.opacity = 0.2;
  sel4.style.opacity = 0.2;
  youtubePlayer.loadVideoById("dBEMRqo2hAM");
});

check2.addEventListener("change", function (event) {
  list__tag.innerText = "기억의 섬";
  sel1.style.opacity = 0.2;
  sel2.style.opacity = 1;
  sel3.style.opacity = 0.2;
  sel4.style.opacity = 0.2;
  youtubePlayer.loadVideoById("EjdjU5aunwI");
  btn2.className = "fas fa-pause";
});
check3.addEventListener("change", function (event) {
  list__tag.innerText = "코코아맛 쿠키의 도전";
  sel1.style.opacity = 0.2;
  sel2.style.opacity = 0.2;
  sel3.style.opacity = 1;
  sel4.style.opacity = 0.2;
  btn2.className = "fas fa-pause";
  youtubePlayer.loadVideoById("gGD7w2QqvcQ");
});
check4.addEventListener("change", function (event) {
  list__tag.innerText = "덧없는 시간의 심연";
  sel1.style.opacity = 0.2;
  sel2.style.opacity = 0.2;
  sel3.style.opacity = 0.2;
  sel4.style.opacity = 1;
  btn2.className = "fas fa-pause";
  youtubePlayer.loadVideoById("zEX_TQehhbk");
});

checkbox.addEventListener("change", function () {
  if (!this.checked) {
    btn2.className = "fas fa-pause";
    playVideo();
  } else {
    btn2.className = "fas fa-play";
    pauseVideo();
  }
});
