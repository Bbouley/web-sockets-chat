$(function() {
    var socket = io();

    $('button').on('click', function(e) {
        e.preventDefault();
        var message = $('#m').val();
        socket.emit('chat message', message);
        $('#m').val('');
    });

    socket.on('chat message', function(message) {
        $('#messages').append(
            '<li>' + message + '</li>'
            );
    });

});
