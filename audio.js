let playList = [
  {
    name: "Bektor Petrovic - Mni Bugd",
    src: "./music/Bektor Petrovic - Mni Bugd (Official Audio).mp3",
    backgroundImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/89/04/55/89045579-6ed6-4fab-b235-a030d68609b3/8721056909834.png/1200x1200bb.jpg",
  },
  {
    name: "Justin Bieber - That Should Be Me",
    src: "./music/Justin Bieber - That Should Be Me (Lyrics).mp3",
    backgroundImage:
      "https://variety.com/wp-content/uploads/2017/09/justin_bieber.png",
  },
  {
    name: "Ali Gatie -  It's You (Official Lyrics Video)",
    src: "./music/Ali Gatie - It's You (Official Lyrics Video).mp3",
    backgroundImage:
      "https://i1.sndcdn.com/artworks-000639029818-2mhs8m-t500x500.jpg",
  },
  {
    name: "Stephanie Poetri - I Love You 3000 (Official Music Video)",
    src: "./music/Stephanie Poetri - I Love You 3000 (Official Music Video).mp3",
    backgroundImage:
      "https://i1.sndcdn.com/artworks-000556674834-kd2123-t500x500.jpg",
  },
  {
    name: "GAVIN.D - A ROCKET TO THE MOONOfficial MV",
    src: "./music/GAVIN.D - A ROCKET TO THE MOONOfficial MV.mp3",
    backgroundImage:
      "https://i.scdn.co/image/ab67616d0000b2739e215eb62c592b3d37c23a9f",
  },
];

const playBtn = document.getElementById("playBtn");
const nextBtn = document.getElementById("nextBtn");
const anim = document.getElementsByClassName("circle")[0];
const audio = document.getElementsByTagName("audio")[0];
const songTitle = document.getElementsByClassName("name")[0];
const backimg = document.getElementsByClassName("circle")[0];

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  } else {
    audio.pause();
    playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
  }
  console.log("AUD", audio);
  anim.classList.toggle("rotate");
});

let CS = 0;

nextBtn.addEventListener("click", () => {
  CS++;
  if (CS === playList.length) {
    CS = 0;
  }
  audio.src = playList[CS].src;
  songTitle.textContent = playList[CS].name;
  backimg.style.backgroundImage = `url(${playList[CS].backgroundImage})`;
  audio.play();

  playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  anim.classList.add("rotate");
});
prevBtn.addEventListener("click", () => {
  CS--;
  if (CS === -1) {
    CS = playList.length - 1;
  }
  audio.src = playList[CS].src;
  songTitle.textContent = playList[CS].name;
  backimg.style.backgroundImage = `url(${playList[CS].backgroundImage})`;
  audio.play();
  playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  anim.classList.add("rotate");
});
