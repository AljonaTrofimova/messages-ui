import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { LatestMessageWithCount } from '../model/latest-message.model';

@Injectable({
	providedIn: 'root',
})
export class LatestMessageSearchService {
	constructor(private http: HttpClient) {}
	search() {
		const httpHeaders = new HttpHeaders({
			'Content-Type': 'appication/json',
		});
		const httpOptions = {
			params: new HttpParams(),
			headers: httpHeaders,
		};
		return this.http.get<LatestMessageWithCount>(
			'http://localhost:8080/messages/v1/latest-message',
			httpOptions,
		);
	}
}
