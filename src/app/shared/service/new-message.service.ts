import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class NewMessageService {
	constructor(private http: HttpClient) {}

	create(messageText: string) {
		let httpParams = new HttpParams();
		httpParams = httpParams.append('text', messageText);

		const httpHeaders = new HttpHeaders({
			'Content-Type': 'appication/json',
		});

		const httpOptions = {
			params: httpParams,
			headers: httpHeaders,
		};
		return this.http.post<(any)>(
			'http://localhost:8080/messages/message?text=' + messageText,
			httpOptions,
		);
	}
}
