import io from 'socket.io-client';
import socketMiddleware from './SocketMiddleware';
import SocketClient from './SocketClient.js';
//export default function configureStore(initialState, socketClient, apiClient) {
export default function configureStore(socketClient) {
    //const loggerMiddleware = createLogger();
    const middleware = [
      socketMiddleware(socketClient)
    ];
}