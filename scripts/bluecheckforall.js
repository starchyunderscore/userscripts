// ==UserScript==
// @name        bluecheckforall - tumblr.com
// @frames
// @namespace   Violentmonkey Scripts
// @match       https://www.tumblr.com/*
// @grant       none
// @version     2.2
// @author      starchyunderscore && https://www.reddit.com/user/DeeSnow97/
// @description 2022-11-11, 5:08:45 PM
// ==/UserScript==

let updateOnNextFrame = false;

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
var observer = new MutationObserver(function(mutations, observer) {
  updateOnNextFrame = true;
});
observer.observe(document, {
  subtree: true,
  attributes: true
});

function updateCheckmarks(){
  const checkmark='<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" class="hlLCc" style="margin-left: 3px;" role="presentation"><use href="#managed-icon__blue-checkmark"></use></svg><svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" class="hlLCc" style="margin-left: 3px;" role="presentation"><use href="#managed-icon__blue-checkmark"></use></svg>';
  const mainBlogLinks = document.querySelectorAll('div[aria-label="avatar"] + div a > div:not(.added_checks)');
  const secondaryBlogLinks = document.querySelectorAll('header[role="banner"] a:not(.added_checks)');

  for (var i = 0; i < mainBlogLinks.length; i++) {
    var currentElm = mainBlogLinks[i];
    currentElm.innerHTML+=checkmark;
    currentElm.classList.add("added_checks");
  }
  for (var i = 0; i < secondaryBlogLinks.length; i++) {
    var currentElm = secondaryBlogLinks[i];
    if(currentElm.children.length==0){
      currentElm.innerHTML+=checkmark;
    }
    currentElm.classList.add("added_checks");
  }
}

function loop(){
  requestAnimationFrame(loop);

  if(updateOnNextFrame){
    updateOnNextFrame = false;
    updateCheckmarks();
  }
}

loop();
