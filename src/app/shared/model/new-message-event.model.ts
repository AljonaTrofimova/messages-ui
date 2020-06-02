export class NewMessageEvent {
	messageCreated = false;

	constructor(messageCreated: boolean) {
		this.messageCreated = messageCreated;
	}
}
