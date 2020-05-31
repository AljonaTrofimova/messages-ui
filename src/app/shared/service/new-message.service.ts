import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { MessageCreationResponse } from "../model/message-creation-response.model";

@Injectable({
	providedIn: "root"
})
export class NewMessageService {
	constructor(private http: HttpClient) {}
	create(messageText: string) {
		let httpParams = new HttpParams();
		httpParams = httpParams.append("text", messageText);

		const httpHeaders = new HttpHeaders({
			"Content-Type": "appication/json"
		});

		const httpOptions = {
			params: httpParams,
			headers: new HttpHeaders()
		};
		return this.http.post<MessageCreationResponse>(
			"http://localhost:8080/messages/message?text=" + messageText,
			httpOptions
		);
	}
}
