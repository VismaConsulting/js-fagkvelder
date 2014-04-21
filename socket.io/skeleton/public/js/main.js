"use strict";
var chatapp = chatapp || {};

chatapp.main = (function (io) {
    var socket;

    function init() {
        socket = io.connect('/');
    }

    function helloWorld() {
        //TODO: sett inn socket.io logikk for å sende/motta meldinger
    }

    function start() {
        init();
        helloWorld();
    }

    return {
        start: start
    };
}(io));
