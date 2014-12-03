// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        var changebutton = document.querySelector("#changecolor");
        changebutton.addEventListener("click", setBackground, false);
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function setBackground(e)
    {
        var body= document.querySelector("body");
        body.style.backgroundColor = getRandomBackground();
        var p = document.querySelector("#text");
        p.innerText = getRandomBackground();
        
    }
    function getRandomBackground()
    {
        var r=Math.floor(Math.random() *256);
        var g=Math.floor(Math.random() *256);
        var b=Math.floor(Math.random() *256);

        var hexR= r.toString(16);
        var hexG= g.toString(16);
        var hexB= b.toString(16);

        if(hexR==1)
        {
            hexR="0"+hexR;
        }
        if(hexG==1)
        {
            hexG="0"+hexG;
        }
        if(hexB==1)
        {
            hexB="0"+hexB;
        }
        var hexColor="#"+hexR+hexG+hexB;
        return hexColor.toUpperCase();
    }

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();