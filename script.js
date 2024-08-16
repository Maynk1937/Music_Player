let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');
let songtitle = document.getElementById('song-title');
let songartist = document.getElementById('song-artist');
let songimg = document.getElementById('song-img')
let next = document.getElementById('next');
let prev = document.getElementById('prev');

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
        name:"Song3",
        title:"Naatu Naatu",
        artist: "By Rahul Sipilgung"
    },
    {
        name:"Song4",
        title:"Ghoongroo",
        artist: "Arijit Singh, Shilpa Rao"
    },
    {
        name:"Song5",
        title:"Bijlee Bijlee",
        artist: "Hardy Sandhu Ft. Palak Tiwari"
    },
    {
        name:"Song6",
        title:"O Sajni Re",
        artist: "Arijit Singh"
    },
    {
        name:"Song7",
        title:"Jugnu Jugnu",
        artist: "Badshah Ft. Nikita Gandhi"
    },
    {
        name:"Song8",
        title:"Dil Chori",
        artist: "Yo Yo Honey Singh"
    },
    {
        name:"Song9",
        title:"Aaj Ki Raat",
        artist: "Madhubanchi Ft. Tamannah"
    },
    {
        name:"Song10",
        title:"Tum Kya Mile",
        artist: "Arijit Singh Ft. Alia Bhatt"
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
    if(songIndex == 9){
        songIndex = 0;
    }
    else{
        songIndex++;
    }
    loadSong(songs[songIndex]);
    song.play();
    ctrlIcon.classList.remove('fa-play');
    ctrlIcon.classList.add('fa-pause');
}
const prevSong = ()=>{
    if(songIndex == 0){
        songIndex = 9;
    }
    else{
        songIndex--;
    }
    loadSong(songs[songIndex]);
    song.play();
    ctrlIcon.classList.remove('fa-play');
    ctrlIcon.classList.add('fa-pause');
}

next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);
