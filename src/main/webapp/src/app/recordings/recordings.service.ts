import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Recording } from "./recordings.model";

@Injectable()
export class RecordingService {
	constructor(private http: HttpClient) { }

	getRecording() {
		return this.http.get<Recording[]>('/api/recording', {responseType: 'json'});
	}

	addRecording(recording: Recording) {
		return this.http.post('/api/recording', recording);
	}
	
	deleteRecording(id: string) {
		return this.http.post('/api/recording/delete/' + `${id}`, {responseType: 'json'});
	}

	onRecordingAdded = new EventEmitter<Recording>();
}