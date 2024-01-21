import { Component, OnInit } from '@angular/core'; declare var $: any;
import { Recording } from '../recordings.model';
import { RecordingService } from '../recordings.service';

import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-recordings-add',
	templateUrl: './recordings-add.component.html',
	styleUrls: ['./recordings-add.component.css']
})
export class RecordingsAddComponent implements OnInit {

	ngOnInit(): void {
		
		
	}

	title = 'micRecorder';
	
	isShown = true;
	isToggle = true;
	//Lets declare Record OBJ
	record: any;

	//Will use this flag for toggeling recording
	recording = false;

	//URL of Blob
	url: any;

	error: any;

	base64content: any;


	addBase64String: string = '';

	constructor(private domSanitizer: DomSanitizer, private recordingService: RecordingService) { }
	//, private recordingService: RecordingService

	sanitize(url: string) {
		return this.domSanitizer.bypassSecurityTrustUrl(url);
	}

	/**
	* Start recording.
	*/
	initiateRecording() {
		this.recording = true;
		let mediaConstraints = {
			video: false,
			audio: true
		};

		navigator.mediaDevices.getUserMedia(mediaConstraints).then(this.successCallback.bind(this), this.errorCallback.bind(this));
	}

	/**
	* Will be called automatically.
	*/
	successCallback(stream: MediaStream) {
		var options = {
			mimeType: "audio/wav",
			numberOfAudioChannels: 1,
			sampleRate: 48000,
		};

		//Start Actuall Recording
		var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
		this.record = new StereoAudioRecorder(stream, options);
		this.record.record();




	}

	/**
	* Stop recording.
	*/
	stopRecording() {
		this.recording = false;
		this.record.stop(this.processRecording.bind(this));

	}

	/**
	* processRecording Do what ever you want with blob
	* @param  {any} blob Blog
	*/
	processRecording(blob: any) {
		this.url = URL.createObjectURL(blob);
		//var file = new File(blob, "test.wav");
		console.log("blob", blob);
		console.log("url", this.url);


		var reader = new FileReader();
		var base64data;
		reader.readAsDataURL(blob);


		reader.onloadend = function() {
			base64data = reader.result;
			console.log(`base64data: ` + base64data);
		}

		reader.addEventListener('loadend', () => {
			console.log('readerResult', reader.result);
			let recording: Recording = new Recording(reader.result, "");
			this.recordingService.addRecording(recording).subscribe(
				(newRecording: any) => {
					this.recordingService.onRecordingAdded.emit(newRecording);
				}
			)
		});


	}

	/**
	* Process Error.
	*/
	errorCallback(error: any) {
		this.error = 'Can not play audio in your browser';
	}


	display(){
		this.isShown = false;
	}
	
	toggle(){
		this.isToggle = !this.isToggle;
	}

}

