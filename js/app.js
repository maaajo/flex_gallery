"use strict";

const panels = document.querySelectorAll('.panel');

function removeTransform(e, element) {
    if (e.propertyName === 'flex-grow') {
        element.classList.toggle('open-active');
    }
}

function makePanelBigger(element) {
    element.classList.toggle('open');
}


panels.forEach( function(panel) {
    panel.addEventListener('click', function(e) {
        makePanelBigger(this);
    });
    panel.addEventListener('transitionend', function(e) {
        removeTransform(e, this);
    });
} )