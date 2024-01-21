import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecordingsAddComponent} from './recordings/recordings-add/recordings-add.component';

import { HttpClientModule } from "@angular/common/http";
import { RecordingService } from './recordings/recordings.service';
import { FormsModule } from '@angular/forms';
import { RecordingsListComponent } from './recordings/recordings-list/recordings-list.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';

@NgModule({
	declarations: [
		AppComponent,
		RecordingsAddComponent,
		RecordingsListComponent,
  UserComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		AppRoutingModule,
	],
	providers: [RecordingService],
	bootstrap: [AppComponent]
})
export class AppModule { }
