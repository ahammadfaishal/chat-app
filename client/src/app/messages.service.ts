import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, Observer } from 'rxjs';
import { ChatMessage } from './chat-message/chat-message';

@Injectable({
  providedIn: 'root'
})

export class MessagesService {

  constructor(private socket: Socket) { }

  sendMessage(msg: ChatMessage) {
    this.socket.emit('message', msg);
  }


  getMessage() {
    return new Observable((observer: Observer<any>) => {
      this.socket.on('message', (message: ChatMessage) => {
        message.isSender = false;
        observer.next(message);
      })
    })
  }

}