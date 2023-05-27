import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('#vimeo-player');

const player = new Player(iframeEl);

const storedTime = localStorage.getItem('videoplayer-current-time');

if (storedTime) {
  player.setCurrentTime(parseFloat(storedTime));
}

player.on(
  'timeupdate',
  throttle(function (data) {
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
  }, 1000)
);
