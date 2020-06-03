import {Component} from '@angular/core';
import {NewMessageEvent} from '../shared/model/new-message-event.model';
import {NewMessageService} from '../shared/service/new-message.service';
import {NewMessageEventService} from '../shared/service/new-message-event.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss'],
})
export class NewMessageComponent {
  newMessageCreated: boolean;
  validationMessage: string = null;
  response: HttpErrorResponse = null;

  constructor(
    private newMessageService: NewMessageService,
    private newMessageEventService: NewMessageEventService,
  ) {
  }

  createMessage(messageText: string) {
    this.response = null;
    if (messageText === null) {
      this.validationMessage = 'Cannot send empty message';
      return;
    } else if (messageText.length < 1) {
      this.validationMessage = 'Cannot send empty message';
      return;
    }

    this.newMessageCreated = false;

    this.newMessageService.create(messageText).subscribe(
      () => {
        this.validationMessage = 'Message was created';
      },
      error => {
        this.validationMessage = this.generateValidationMessage(error);
      },
    );
    this.newMessageEventService.send(new NewMessageEvent(true));
  }

  resetValidationMessage() {
    this.validationMessage = null;
  }

  generateValidationMessage(httpErrorResponse: HttpErrorResponse) {
    if (httpErrorResponse != null)
      return (
        'Unexpected error occured with status ' +
        httpErrorResponse.status +
        ' and message ' + httpErrorResponse.message
      );
  }
}
