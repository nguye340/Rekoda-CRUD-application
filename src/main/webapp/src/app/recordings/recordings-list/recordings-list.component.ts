import { Component, OnInit } from '@angular/core';
import { Recording } from '../recordings.model';
import { RecordingService } from '../recordings.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
	selector: 'app-recordings-list',
	templateUrl: './recordings-list.component.html',
	styleUrls: ['./recordings-list.component.css']
})
export class RecordingsListComponent implements OnInit {

	recordings: Recording[] = [];
	//URL of Blob
	url: any;
	//router!:Router;

	constructor(private router: Router, private recordingService: RecordingService, private sanitizer: DomSanitizer) { }

	ngOnInit(): void {
		this.recordingService.getRecording()
			.subscribe(
				(recordings: any[]) => {
					this.recordings = recordings

				},
				(error: any) => console.log(error)
			);
		this.recordingService.onRecordingAdded.subscribe(

			(recording: Recording) => this.recordings.push(recording)

		);

	}

	sanitize(url: string) {
		return this.sanitizer.bypassSecurityTrustUrl(url);
	}

	onRecordDelete(id: any) {

		this.recordingService.deleteRecording(id).subscribe(
			(newRecord: any) => {
				this.router.routeReuseStrategy.shouldReuseRoute = () => false;
				this.router.onSameUrlNavigation = 'reload';
				this.router.navigate(['/list']);
			}
		)

	}
/*
	reloadComponent() {
		this.router.routeReuseStrategy.shouldReuseRoute = () => false;
		this.router.onSameUrlNavigation = 'reload';
		this.router.navigate(['/same-route']);
	}*/
}

