import { Component, OnInit } from '@angular/core';
import { ChatMessage } from './chat-message';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})

export class ChatMessageComponent implements OnInit {

  constructor(
    private messageService: MessagesService) { }

  model: string = '';

  messageList: ChatMessage[] = [];

  sendMessage(): void {
    let message = new ChatMessage(this.model, new Date(), true);
    this.messageService.sendMessage(message);

    this.messageList.push(message);
    this.model = "";
  };

  ngOnInit(): void {
    this.messageService.getMessage().subscribe((message: ChatMessage) => {
      this.messageList.push(message);
    })
  }

  submitted = false;

  onSubmit() {
    this.sendMessage()
    this.submitted = true;
  }
}