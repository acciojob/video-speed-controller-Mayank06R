// Select Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const volume = player.querySelector('input[name="volume"]');
const playbackSpeed = player.querySelector('input[name="playbackSpeed"]');
const progress = player.querySelector('.progress');
const progressFilled = player.querySelector('.progress__filled');
const rewindButton = player.querySelector('.rewind');
const forwardButton = player.querySelector('.forward');

// Play/Pause Toggle
function togglePlay() {
  video.paused ? video.play() : video.pause();
}

function updateButton() {
  toggle.textContent = video.paused ? '►' : '❚ ❚';
}

// Volume and Playback Speed
function handleRangeUpdate() {
  video[this.name] = this.value;
}

// Progress Bar Update
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Skip/Rewind
function skip(seconds) {
  video.currentTime += seconds;
}

// Event Listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
volume.addEventListener('input', handleRangeUpdate);
playbackSpeed.addEventListener('input', handleRangeUpdate);

progress.addEventListener('click', scrub);

rewindButton.addEventListener('click', () => skip(-10));
forwardButton.addEventListener('click', () => skip(25));
