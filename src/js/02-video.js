import { Player } from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('play', function() {
    console.log('played the video!');
});
player.on('timeupdate', function(data) {
  const currentTime = data.seconds;
  console.log(currentTime);
});