// ==UserScript==
// @name        bluecheckforall - tumblr.com
// @frames
// @namespace   Violentmonkey Scripts
// @match       https://www.tumblr.com/*
// @grant       none
// @version     2.2
// @author      starchyunderscore
// @description 2022-11-11, 5:08:45 PM
// ==/UserScript==
MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
var observer = new MutationObserver(function(mutations, observer) {
  updateCheckmarks();
});
observer.observe(document, {
  subtree: true,
  attributes: true
});
function updateCheckmarks(){
  const checkmark='<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" class="hlLCc" role="presentation"><use href="#managed-icon__blue-checkmark"></use></svg><svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" class="hlLCc" role="presentation"><use href="#managed-icon__blue-checkmark"></use></svg>';
  // var mainBlogLinks = document.querySelectorAll('div[aria-label="avatar"] + div a > div')
  // var secondaryBlogLinks = document.querySelectorAll('header[role="banner"] a')
  var mainBlogLinks = document.getElementsByClassName("sqHC2");
  var secondaryBlogLinks = document.getElementsByClassName("BSUG4");
  for (var i = 0; i < mainBlogLinks.length; i++) {
    var currentElm = mainBlogLinks[i];
    currentElm.innerHTML+=checkmark;
    currentElm.className="added_checks";
  }
  for (var i = 0; i < secondaryBlogLinks.length; i++) {
    var currentElm = secondaryBlogLinks[i];
    if(currentElm.children.length==0){
      currentElm.innerHTML+=checkmark;
    }
    currentElm.className="added_checks";
  }
}
