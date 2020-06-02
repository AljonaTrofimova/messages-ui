import { Component, OnInit } from '@angular/core';
import { MessageSearchService } from '../shared/service/message-search.service';
import { Message } from '../shared/model/message.model';
import { NewMessageEventService } from '../shared/service/new-message-event.service';
import { finalize } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
	selector: 'app-all-messages',
	templateUrl: './all-messages.component.html',
	styleUrls: ['./all-messages.component.scss'],
})
export class AllMessagesComponent implements OnInit {
	messages: Message[] = [];
	isLoading = false;

	constructor(
		private messageSearchService: MessageSearchService,
		private newMessageEventService: NewMessageEventService,
	) {
		this.newMessageEventService.receive().subscribe(event => {
			setTimeout(() => {
				this.search();
			}, 1000);
		});
	}

	private search() {
		this.isLoading = true;
		this.messageSearchService
			.search()
			.pipe(finalize(() => (this.isLoading = false)))
			.subscribe(
				(messages: Message[]) => {
					this.messages = messages;
					this.messages.map(message => {
						message.created = moment(message.created).format(
							'MMMM Do YYYY, HH:mm:ss',
						);
					});
				},
				error => {
					console.log(error);
				},
			);
	}

	ngOnInit(): void {
		this.search();
	}

	messagesExist(): boolean {
		return this.messages != null && this.messages.length > 0;
	}
}
