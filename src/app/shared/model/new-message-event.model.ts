export class NewMessageEvent {
  messageCreated:boolean=false;

  constructor(messageCreated: boolean) {
    this.messageCreated=messageCreated;
  }
}
