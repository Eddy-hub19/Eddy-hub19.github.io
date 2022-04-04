import PanelSnap from 'panelsnap';

const instance = new PanelSnap({
    // parent container
    container: document.body,

    // panel selector
    panelSelector: '> section',

    // threshold
    directionThreshold: 50,

    // scroll delay
    delay: 1,

    // duration in milliseconds
    duration: 300,

    // easing function
    easing: function(t) { return t }
});