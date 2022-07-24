const mobileClose = document.querySelector('.mobile-close');
const mobileAside = document.querySelector('.mobile-aside');
const mobileAsideIcon = document.querySelector('.mobile-icon');
const navBarOverLap = document.querySelector('.navbar-overlap');
const listInnerGame = document.querySelector('.list-inner-GAME');
const mobileAsideList = document.querySelectorAll('.mobile-aside-list');
const mobileAsideGameSvg = document.getElementById('mobile-aside-svg-game');

let isGameOpen = false;

const closeMobileSide = function(){
	mobileAside.style.display = 'none';
	navBarOverLap.style.display = 'none';
}
const closeMobileSideIcon = function(){
	mobileAside.style.display = 'block';
	navBarOverLap.style.display = 'block';
}
const closeMobileGame = function(){
	if(!isGameOpen){
		listInnerGame.style.display = 'block';
		mobileAsideList[0].style.color = '#f06414';
		mobileAsideGameSvg.classList.add('mobile-aside-svg-rorate');
	} else{
		listInnerGame.style.display = 'none';
		mobileAsideList[0].style.color = '#fff';
		mobileAsideGameSvg.classList.remove('mobile-aside-svg-rorate');
	}
	isGameOpen = !isGameOpen;
}

mobileClose.addEventListener('click',closeMobileSide);
mobileAsideIcon.addEventListener('click',closeMobileSideIcon);
navBarOverLap.addEventListener('click',closeMobileSide);
mobileAsideList[0].addEventListener('click',closeMobileGame);