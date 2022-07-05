
//video sound mute unmute
btnMute = document.getElementById('btnMute');
function toggleMute(){
    let m;
    document.querySelectorAll('audio, video').forEach(el => { el.muted = !el.muted; m = !el.muted; });
    if (m) {
        // Change the button to a mute button
        changeButtonType(btnMute, '<i class="fa-solid fa-volume-high"></i>');
    }
    else {
        // Change the button to an unmute button
        changeButtonType(btnMute, '<i class="fa-solid fa-volume-xmark"></i>');
    }
}

//Updates a button's title, innerHTML and CSS class
function changeButtonType(btn, value) {
    btn.title     = value;
    btn.innerHTML = value;
    btn.className = value;
}


//play when video is visible
// var videos = document.getElementsByTagName("video"), fraction = 0.8;

var wrapper = $('.main-container');
wrapper.scrollTop(400);

var vid2=document.querySelector("#player .active");

wrapper.scroll(function(){
var st = wrapper.scrollTop();

if (st > 300)//you can change it according to your screen size 
 {document.querySelector("#player .active").pause();}
  else
 {document.querySelector("#player .active").play();}
  
});


// hover trailer video autoplay

var figure = $(".video").hover(hoverVideo, hideVideo);

    function hoverVideo(e) {
        $('video', this).get(0).play();
    }

    function hideVideo(e) {
        $('video', this).get(0).pause();
    }

// modal video autoplay

$('#videoModal').on('shown.bs.modal', function() {
    $('#video-mobile')[0].play();
})
$('#videoModal').on('hidden.bs.modal', function() {
    $('#video-mobile')[0].pause();
})