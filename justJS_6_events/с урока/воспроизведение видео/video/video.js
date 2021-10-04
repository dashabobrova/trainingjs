'use strict';
const video = document.querySelector('video');
const playBtn = document.querySelector('.fa-play');
const pauseBtn = document.querySelector('.fa-pause');
const volume = document.querySelector('.volume');
const timing = document.querySelector('.timing'); // ползунок со временем
const currentTimeEl = document.querySelector('.currentTime');

let wasVideoPlaying = false;
let progressIdentifier = null; // идентификатор для cleacrRime: дается значение в progressIdentifier = setInterval(changeProgress, 100)

// для того, чтобы ползунок принимал макс значение длительности видео
window.addEventListener('load', function () {
    timing.min = 0;
    timing.max = video.duration;
});

pauseBtn.addEventListener('click', function () {
    if (!video.paused) { // чтобы при нажатии на паузу не продолжало обноаляться
        // console.log('pause btn');
        video.pause();
        clearInterval(progressIdentifier);
    }
});

playBtn.addEventListener('click', function () {
    // console.log('play btn');
    if (video.paused) { // чтобы при нажатии на плей начиналось обновление
        video.play();
        progressIdentifier = setInterval(changeProgress, 100);
    }
});

timing.addEventListener('change', function () {
    // console.log('timing change');
    video.currentTime = timing.value;
    if (wasVideoPlaying) {
        video.play();
        progressIdentifier = setInterval(changeProgress, 100);
    } else {
        changeProgress();
    }
});

timing.addEventListener('mousedown', function () {
    // console.log('timing mousedown');
    
    wasVideoPlaying = !video.paused;
    if (wasVideoPlaying) {
        video.pause();
        clearInterval(progressIdentifier);
    }
});

// запись времени воспроизведения в ползунок
function changeProgress() {
    timing.value = video.currentTime; 
    currentTimeEl.innerText = video.currentTime;
}

video.addEventListener('ended', function() {
    clearInterval(progressIdentifier); // вызовы по этому индентификатору больше не будут происходить
});

// громкость видео, как в ползунке
volume.addEventListener('change', function () {
    video.volume = volume.value;
});
