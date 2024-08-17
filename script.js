let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');
let songtitle = document.getElementById('song-title');
let songartist = document.getElementById('song-artist');
let songimg = document.getElementById('song-img')
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let darmode = document.getElementById('darkmode');
let icon = document.getElementById('icon');
let player = document.getElementById('musicplayer')


let isDarkMode = false;
darkmode.addEventListener('click', ()=>{
    if (isDarkMode) {
        player.style.backgroundColor = "rgb(173, 91, 91)";
        icon.classList.remove('fa-lightbulb');
        icon.classList.add('fa-moon');
    } else {
        player.style.backgroundColor = "black";
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-lightbulb');
    }
    isDarkMode = !isDarkMode;
});



const songs = [
    {
        name:"Song1",
        title:"What Jhumka!",
        artist: "Arijit Singh Ft. Alia Bhatt"
    },
    {
        name:"Song2",
        title:"Tauba Tauba",
        artist: "Karan Aujla Ft. Vicky"
    },
    {
        name:"Song5",
        title:"Bijlee Bijlee",
        artist: "Hardy Sandhu Ft. Palak Tiwari"
    },
    {
        name:"Song7",
        title:"Jugnu Jugnu",
        artist: "Badshah Ft. Nikita Gandhi"
    },
    {
        name:"Song10",
        title:"Taras",
        artist: "Jasmine Ft. Sharvari"
    }
]


song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    if(ctrlIcon.classList.contains("fa-play")){
        song.play();
        ctrlIcon.classList.remove('fa-play');
        ctrlIcon.classList.add('fa-pause');
        if(song.play()){
            setInterval(()=>{
                progress.value = song.currentTime;
            },500)
        }
    }
    else{
        song.pause();
        ctrlIcon.classList.remove('fa-pause');
        ctrlIcon.classList.add('fa-play');
    }
}

progress.onchange = function(){
    song.currentTime = progress.value; 
    song.play();
    ctrlIcon.classList.remove('fa-play');
    ctrlIcon.classList.add('fa-pause');
}
const loadSong= (songs) =>{
    songtitle.textContent = songs.title;
    songartist.textContent = songs.artist;
    song.src="songs/" + songs.name + ".mp3";
    songimg.src="images/" + songs.name + ".jpg";
};
loadSong(songs[0]);
songIndex = 0;

const nextSong = () =>{
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    song.play();
    ctrlIcon.classList.remove('fa-play');
    ctrlIcon.classList.add('fa-pause');
    if(song.play()){
        setInterval(()=>{
            progress.value = song.currentTime;
        },500)
    }
}
const prevSong = ()=>{
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    song.play();
    ctrlIcon.classList.remove('fa-play');
    ctrlIcon.classList.add('fa-pause');
    if(song.play()){
        setInterval(()=>{
            progress.value = song.currentTime;
        },500)
    }
}

song.addEventListener('ended', nextSong);


next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);
