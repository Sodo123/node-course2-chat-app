var socket = io();
socket.on('connect', () => {
  console.log('Connected to server');

  socket.on('newMessage', (message) => {
    console.log('newMessage', message);
  });

});

socket.on('disconnect', () => {
  console.log('Disconected from server');
});
