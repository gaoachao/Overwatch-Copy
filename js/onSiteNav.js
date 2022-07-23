const siteNavItems = document.querySelectorAll('.ow-SiteNav-items');
const siteNavItem = document.querySelectorAll('.ow-SiteNav-item');

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