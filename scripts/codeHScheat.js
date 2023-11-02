// ==UserScript==
// @name        New script - codehs.com
// @namespace   Violentmonkey Scripts
// @match       https://codehs.com/student/*
// @grant       none
// @version     1.0
// @author      -
// @description 11/2/2023, 10:04:43 AM
// ==/UserScript==

const EVENT_OPTIONS = {bubbles: true, cancelable: false, composed: true};
const EVENTS = {
    BLUR: new Event("blur", EVENT_OPTIONS),
    CHANGE: new Event("change", EVENT_OPTIONS),
    INPUT: new Event("input", EVENT_OPTIONS),
};

function toHex(s) {
    var s = unescape(encodeURIComponent(s))
    var h = ''
    for (var i = 0; i < s.length; i++) {
        h += s.charCodeAt(i).toString(16)
    }
    return h
}

function fromHex(h) {
    var s = ''
    for (var i = 0; i < h.length; i+=2) {
        s += String.fromCharCode(parseInt(h.substr(i, 2), 16))
    }
    return decodeURIComponent(escape(s))
}

window.addEventListener("load", (event) => {
  const BUTTON_ONE = document.getElementsByClassName("__abacus_button")[2] // Submit & continue or next
  if(BUTTON_ONE.innerHTML == "Next") { // skip if it is an example
    BUTTON_ONE.click();
  } else if (BUTTON_ONE.innerHTML == "Submit + Continue") { // put code if it is an example
    const inputElement = document.querySelector("#ace_text-input-textarea");
    const assignment = toHex(document.getElementsByClassName("__abacus_editor-label")[0].children[0].innerHTML);
    inputElement.value = "5454545454545454";
    const tracker = inputElement._valueTracker;
    tracker && tracker.setValue("5454545454545454");
    inputElement.dispatchEvent(EVENTS.INPUT);
    inputElement.dispatchEvent(EVENTS.BLUR);
  }
});
