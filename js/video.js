const video = document.getElementById('video');
const videoButton = document.querySelector('.BgVidControl');
const videoPlay = document.querySelector('.BgVidControl-inner--pause');
const videoPause = document.querySelector('.BgVidControl-inner--play')

let isPlay = true;

const videoControl = function(){
	if(isPlay){
		video.pause();
		videoPlay.style.display = "none";
		videoPause.style.display = "block";
	}else{
		video.play();
		videoPlay.style.display = "block";
		videoPause.style.display = "none";
	}
	isPlay = !isPlay;
}


videoButton.addEventListener('click',videoControl);
