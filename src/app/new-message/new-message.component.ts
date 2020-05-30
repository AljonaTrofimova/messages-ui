import {Component, OnInit} from '@angular/core';
import {NewMessageEvent} from '../shared/model/new-message-event.model';
import {NewMessageService} from '../shared/service/new-message.service';
import {NewMessageEventService} from '../shared/service/new-message-event.service';
import {MessageCreationResponse} from '../shared/model/message-creation-response.model';

@Component({
  selector: 'new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent implements OnInit {
  messageCreationResponse: MessageCreationResponse;

  constructor(private newMessageService: NewMessageService,
              private newMessageEventService: NewMessageEventService) {
  }

  newMessageCreated: boolean;

  createMessage(messageText: string) {
    this.newMessageCreated = false;
    if (messageText != null) {
      if (messageText.length > 0)
        this.newMessageService.create(messageText).subscribe((response: MessageCreationResponse) => {
          this.messageCreationResponse = response;
        }, (error) => {
          console.log(error);
        });
      this.newMessageEventService.send(new NewMessageEvent(true))
    }
  }

  ngOnInit(): void {
  }
}
