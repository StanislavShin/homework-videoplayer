// $(document).ready(function() {
//     var video = document.getElementById('video'),
//         playBtn = $('.play'),
//         timeBlock = $('.time');


//     playBtn.on('click', function(e) {
//         e.preventDefault();
//         if (video.paused) {
//             video.play();
//             playBtn.text('||');
//         } else {
//             video.pause();
//             playBtn.text('>')
//         }
//     });
//     $(video).on('timeupdate', function() {
//         // console.log('sdfsd') проверка события
//         // console.log(video.currentTime)// вывод времени 
//         var elapsedTime = video.duration - video.currentTime;
//         //     minutes = Math.floor(elapsedTime / 60),
//         //     seconds = Math.floor(elapsedTime - (minutes * 60)),
//         //     time = minutes + ':' + seconds;
//         // timeBlock.text(time);
//         setTime(elapsedTime);
//     });
//     $(video).on('canplay', function() {
//         var duration = video.duration;
//         //     minutes = Math.floor(duration / 60),
//         //     seconds = Math.floor(duration - (minutes * 60)),
//         //     time = minutes + ':' + seconds;
//         // timeBlock.text(time);
//         setTime(duration);
//     });
//     // timeBlock.on('click', function() {
//     //     var currentTime = video.currentTime;
//     //     //     minutes = Math.floor(currentTime / 60),
//     //     //     seconds = Math.floor(currentTime - (minutes * 60)),
//     //     //     time = minutes + ':' + seconds;
//     //     // timeBlock.text(time);


//     // });

//     function setTime(time) {
//         var minutes = Math.floor(time / 60),
//             seconds = Math.floor(time - (minutes * 60)),
//             timeString = minutes + ':' + seconds;
//         timeBlock.text(timeString);
//     };

// });







$(document).ready(function() {
    var video = document.getElementById('video'),
        playBtn = $('.play'),
        timeBlock = $('.time'),
        progressBar = $('.progress_bar');


    playBtn.on('click', function(e) {
        e.preventDefault();
        if (video.paused) {
            video.play();
            playBtn.text('||');
        } else {
            video.pause();
            playBtn.text('>')
        }
    });
    $(video).on({
        timeupdate: function() {
            var duration = video.duration,
                currentTime = video.currentTime,
                elapsedTime = duration - currentTime;
            setTime(elapsedTime);

            var progression = Math.floor(currentTime / duration * 100);

            progressBar.css({ width: progression + '%' });
        },
        canplay: function() {
            var duration = video.duration;
            setTime(duration);
        }
    });

    $('.progress').on('click', function(e) {
        e.preventDefault();
        var $this = $(this),
            position = e.pageX - $this.offset().left,
            width = $this.width(),
            persents = Math.floor(position / width * 100),
            trackPosition = video.duration / 100 * persents;

        video.currentTime = trackPosition;
        // console.log(persents);
        // console.log(e.pageX, $this.offset().left, position);
    });

    function setTime(time) {
        var minutes = Math.floor(time / 60),
            seconds = Math.floor(time - (minutes * 60)),
            timeString = minutes + ':' + seconds;
        timeBlock.text(timeString);
    };

});;