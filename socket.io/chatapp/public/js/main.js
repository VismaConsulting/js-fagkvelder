"use strict";
var chatapp = chatapp || {};

chatapp.main = (function (io, $) {
    var socket,
        $data,
        $datasend,
        $conversation,
        $users;

    function initBindings() {
        $data = $('#data');
        $datasend = $('#datasend');
        $conversation = $('#conversation');
        $users = $('#users');
    }

    function setUpChat() {
        socket.on('connect', function () {
            socket.emit('adduser', prompt("What's your name?"));
        });

        socket.on('updatechat', function (username, data) {
            $conversation.append('<b>' + username + ':</b> ' + data + '<br>');
        });

        socket.on('updateusers', function (data) {
            $users.empty();
            $.each(data, function (key) {
                $users.append('<div>' + key + '</div>');
            });
        });
    }

    function onClickEvent() {
        $datasend.click(function () {
            var message = $data.val();
            $data.val('');
            socket.emit('sendchat', message);
        });
    }

    function onEnter() {
        $data.keypress(function (e) {
            if (e.which === 13) {
                $(this).blur();
                $datasend.click();
                $data.focus();
            }
        });
    }

    function init() {
        initBindings();
        socket = io.connect('/');
        setUpChat();
        onClickEvent();
        onEnter();
    }

    return {
        init: init
    };
}(io, jQuery));
