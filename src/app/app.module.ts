import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	NbAccordionModule,
	NbAlertModule,
	NbButtonModule,
	NbCardModule,
	NbIconModule,
	NbInputModule,
	NbLayoutModule,
	NbSidebarModule,
	NbSidebarService,
	NbSpinnerModule,
	NbThemeModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule } from '@angular/forms';
import { LatestMessageComponent } from './latest-message/latest-message.component';
import { NewMessageComponent } from './new-message/new-message.component';
import { AllMessagesComponent } from './all-messages/all-messages.component';

@NgModule({
	declarations: [
		AllMessagesComponent,
		NewMessageComponent,
		LatestMessageComponent,
		AppComponent,
	],
	imports: [
		NbAlertModule,
		NbSpinnerModule,
		NbButtonModule,
		NbInputModule,
		NbIconModule,
		NbAccordionModule,
		HttpClientModule,
		NbCardModule,
		FormsModule,
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		NbLayoutModule,
		NbEvaIconsModule,
		NbThemeModule.forRoot({ name: 'default' }),
		NbSidebarModule.forRoot(),
	],
	providers: [NbSidebarService],
	bootstrap: [AppComponent],
})
export class AppModule {}
