import {Component} from '@angular/core';
import {NewMessageEvent} from '../shared/model/new-message-event.model';
import {NewMessageService} from '../shared/service/new-message.service';
import {NewMessageEventService} from '../shared/service/new-message-event.service';
import {MessageCreationResponse} from '../shared/model/message-creation-response.model';

@Component({
  selector: 'new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent {
  messageCreationResponse: MessageCreationResponse;
  newMessageCreated: boolean;
  validationMessage: string = null;

  constructor(private newMessageService: NewMessageService,
              private newMessageEventService: NewMessageEventService) {
  }

  createMessage(messageText: string) {
    if (messageText == null) {
      this.validationMessage = "Cannot send empty message";
      return;
    } else if (messageText.length < 1) {
      this.validationMessage = "Cannot send empty message";
      return;
    }

    this.newMessageCreated = false;

    this.newMessageService.create(messageText).subscribe((response: MessageCreationResponse) => {
      this.messageCreationResponse = response;
      this.validationMessage = this.messageCreationResponse.validationMessage;
    }, (error) => {
      console.log(error);
    });
    this.newMessageEventService.send(new NewMessageEvent(true))

  }

  resetValidationMessage() {
    this.validationMessage = null;
  }

}
