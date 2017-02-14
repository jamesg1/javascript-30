// Get Elements
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const fullScreen = document.querySelector('.fullscreen');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Build Functions
function togglePlay(){
  video[video.paused ? 'play': 'pause']();
}

function updateButton(){
  toggle.textContent = this.paused ? '►' : '❚ ❚';
}

function skip() {
  console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
  video[this.name] = this.value;
}

function handleProgress(){
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}
let isFullScreen = false;

function toggleFullScreen(){
  isFullScreen = true;
	if(player.requestFullScreen){
		player.requestFullScreen();
	} else if(player.webkitRequestFullScreen){
		player.webkitRequestFullScreen();
	} else if(player.mozRequestFullScreen){
		player.mozRequestFullScreen();
	} else if(player.msRequestFullScreen){
		player.msRequestFullScreen();
	}
}

// Hook up event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
fullScreen.addEventListener('click', toggleFullScreen);
