const siteNavItems = document.querySelectorAll(".ow-SiteNav-items");
const siteNavItem = document.querySelectorAll(".ow-SiteNav-item");
const onSiteNav = document.querySelector(".onsite-nav");
const onSiteLogo = document.querySelector(".ow-SiteNavLogo-sigil");
const onSiteButton = document.querySelector(".ow-SiteNav-button");
const subItemsGame = document.querySelector(".sub-ow-items-game");
const onSiteNavGamesvg =document.querySelector(".on-SiteNav-Game-svg")

let isSubGame = false;

//滚动事件
const isNav = function () {
  if (window.scrollY >= 50) {
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
};
//Game下拉框
const gameDropBox = function () {
  if (!isSubGame) {
    subItemsGame.style.display = "block";
		siteNavItems[0].style.backgroundColor = '#353c42';
		siteNavItem[0].style.color = '#f27127';
		siteNavItem[0].classList.add('items-bottom');
		onSiteNavGamesvg.classList.add('svg-rorate');
  }else {
		subItemsGame.style.display = "none";
		siteNavItems[0].style.backgroundColor = '#f2f1ed';
		siteNavItem[0].style.color = '#4b535d';
		siteNavItem[0].classList.remove('items-bottom');
		onSiteNavGamesvg.classList.remove('svg-rorate');
	}
	isSubGame = !isSubGame;
};

window.addEventListener("scroll", isNav);

siteNavItems.forEach((item) => {
  item.addEventListener("mouseover", function () {
    item.classList.add("has-animation");
  });
  item.addEventListener("mouseleave", function () {
    item.classList.remove("has-animation");
  });
});

siteNavItem.forEach((item) => {
  item.addEventListener("mouseover", function () {
    item.classList.add("has-animation-title");
  });
  item.addEventListener("mouseleave", function () {
    item.classList.remove("has-animation-title");
  });
});

//Game下拉框
siteNavItems[0].addEventListener("click", gameDropBox);
