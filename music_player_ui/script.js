let audio = document.getElementById('audio');
let playBtn =  document.getElementById('play');
let prevBtn =  document.getElementById('prev');
let nextBtn =  document.getElementById('next');


let playlist = [

  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',


];


function load (i){
  audio.src = playlist[i]
  audio.play();
}


let idx = 0;

playBtn.addEventListener('click', ()=>{
  if(audio.paused) audio.play();
  else audio.pause();

})

prevBtn.addEventListener('click', ()=>{
  idx--;

  if (idx < 0) {
    idx = playlist.length -1
    
  }
  load(idx)

})
nextBtn.addEventListener('click', ()=>{
  idx++;

  if (idx >= playlist.length) {
    idx = 0;
    
  }
  load(idx)

})