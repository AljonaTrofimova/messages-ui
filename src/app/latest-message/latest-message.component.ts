import { Component, OnInit } from '@angular/core';
import { LatestMessageSearchService } from '../shared/service/latest-message-search.service';
import { LatestMessageWithCount } from '../shared/model/latest-message.model';
import { NewMessageEventService } from '../shared/service/new-message-event.service';
import { finalize } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
	selector: 'latest-message',
	templateUrl: './latest-message.component.html',
	styleUrls: ['./latest-message.component.scss'],
})
export class LatestMessageComponent implements OnInit {
	latestMessage: LatestMessageWithCount = null;
	isLoading: boolean = false;

	constructor(
		private latestMessageSearchService: LatestMessageSearchService,
		private newMessageEventService: NewMessageEventService,
	) {
		this.newMessageEventService.receive().subscribe(event => {
			setTimeout(() => {
				this.search();
			}, 1000);
		});
	}

	private search() {
		this.latestMessageSearchService
			.search()
			.pipe(finalize(() => (this.isLoading = false)))
			.subscribe(
				(message: LatestMessageWithCount) => {
					this.latestMessage = message;
				},
				error => {
					console.log(error);
				},
			);
	}

	public formattedMessageCreationDate(): string {
		if (this.latestMessage == null) return '';
		else if (this.latestMessage.created == null) return '';
		return moment(this.latestMessage.created).format('MMMM Do YYYY, HH:mm:ss');
	}

	ngOnInit(): void {
		this.search();
	}

	messageExist(): boolean {
		return this.latestMessage != null;
	}
}
