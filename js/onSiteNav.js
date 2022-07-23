const siteNavItems = document.querySelectorAll('.ow-SiteNav-items');
const siteNavItem = document.querySelectorAll('.ow-SiteNav-item');
const onSiteNav = document.querySelector('.onsite-nav');
const onSiteLogo = document.querySelector('.ow-SiteNavLogo-sigil');
const onSiteButton = document.querySelector('.ow-SiteNav-button');

siteNavItems.forEach((item) => {
	item.addEventListener("mouseover",function(){
		item.classList.add('has-animation');
	})
	item.addEventListener("mouseleave",function(){
		item.classList.remove('has-animation');
	})
});

siteNavItem.forEach((item) =>{
	item.addEventListener("mouseover",function(){
		item.classList.add('has-animation-title');
	})
	item.addEventListener("mouseleave",function(){
		item.classList.remove('has-animation-title');
	})
})


// setInterval(()=>{
// 	console.log(window.scrollY);
// },1000)

const isNav = function(){
	if(window.scrollY >= 50){
		onSiteNav.style.position = "fixed";
		onSiteNav.style.top = "0";
		onSiteNav.style.width = "100vw";
		onSiteLogo.style.marginLeft = "38px";
		onSiteButton.style.marginRight = "22px";
	} else {
		onSiteNav.style.position = "absolute";
		onSiteNav.style.top = "95px";
		onSiteNav.style.width = "95%";
		onSiteLogo.style.marginLeft = "0";
		onSiteButton.style.marginRight = "0";
	}
}
window.addEventListener("scroll",isNav);