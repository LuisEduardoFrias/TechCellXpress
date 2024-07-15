//
import { io } from 'socket.io-client'
import { baseApiTechcellxpress } from 'hp/api_router'

export default function Socket(url: string) {
  const socket = io(baseApiTechcellxpress, {
    autoConnect: false
  });

  function connet(text: string, fn: (value: any) => void) {
    socket.connect();
    socket.on(text, (nuevoProgreso) => {
      fn(nuevoProgreso);
    });

  }

  function emit(emition: string, token: string) {
    socket.emit(emition, token);
  }

  function close() {
    socket.disconnect();
  }

  return [connet, emit, close]
};