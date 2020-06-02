import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NewMessageEvent } from '../model/new-message-event.model';

@Injectable({
	providedIn: 'root',
})
export class NewMessageEventService {
	private event = new Subject<NewMessageEvent>();

	send(event: NewMessageEvent) {
		if (event) this.event.next(event);
	}

	receive(): Observable<NewMessageEvent> {
		return this.event.asObservable();
	}
}
