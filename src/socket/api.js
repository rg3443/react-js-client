import openSocket from 'socket.io-client';

const socket = openSocket('http://192.168.16.163:8070');

export default function subscribeToTimer(cb) {
    socket.on('timer',timestamp => cb(null,timestamp));
    socket.emit('subscibeToTimer',1000);
}
