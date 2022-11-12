// ==UserScript==
// @name        bluecheckforall - tumblr.com
// @frames
// @namespace   Violentmonkey Scripts
// @match       https://www.tumblr.com/*
// @grant       none
// @version     2.1
// @author      starchyunderscore
// @description 2022-11-11, 5:08:45 PM
// ==/UserScript==
test();
MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
var observer = new MutationObserver(function(mutations, observer) {
    console.log(mutations, observer);
    test();
});
observer.observe(document, {
  subtree: true,
  attributes: true
});
function test(){
  var elms = document.getElementsByClassName("sqHC2");
  var elms2 = document.getElementsByClassName("BSUG4");
  for (var i = 0; i < elms.length; i++) {
    var e = elms[i];
    e.innerHTML+='<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" class="hlLCc" role="presentation"><use href="#managed-icon__blue-checkmark"></use></svg><svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" class="hlLCc" role="presentation"><use href="#managed-icon__blue-checkmark"></use></svg>';
    e.className="added_checks";
  }
  for (var i = 0; i < elms2.length; i++) {
    var e = elms2[i];
    if(e.children.length==0){
      e.innerHTML+='<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" class="hlLCc" role="presentation"><use href="#managed-icon__blue-checkmark"></use></svg><svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" class="hlLCc" role="presentation"><use href="#managed-icon__blue-checkmark"></use></svg>';
    }
    e.className="added_checks";
  }
}
