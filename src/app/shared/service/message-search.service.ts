import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Message } from "../model/Message.model";

@Injectable({
	providedIn: "root"
})
export class MessageSearchService {
	constructor(private http: HttpClient) {}
	search() {
		const httpHeaders = new HttpHeaders({
			"Content-Type": "appication/json"
		});
		const httpOptions = {
			params: new HttpParams(),
			headers: httpHeaders
		};
		return this.http.get<Message[]>(
			"http://localhost:8080/messages",
			httpOptions
		);
	}
}
