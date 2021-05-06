import { Component } from '@angular/core';
import { NewLibraryData as newLibrary } from '@runtime-state-data/new-library.data';
import { Title } from '@angular/platform-browser';
import { appName } from '@string-constants/app-name';
import { GetFormattedPageTitleService as getFormattedPageTitle }
	from '@services/get-formatted-page-title.service';


@Component({
	selector: 'app-libraries',
	template: `
		<div clearAlertsOnDestroy>

			<header><h2>{{heading}}</h2></header>

			<libraries-list></libraries-list>

			<new-library-button></new-library-button>

			<new-library-form *ngIf="creatingNewLibrary" clearFormOnInit></new-library-form>

		</div>
	`
})
export class LibrariesComponent {

	heading = 'Your Libraries';


	get creatingNewLibrary(): boolean {
		return newLibrary.beingCreated;
	}

	constructor(private __title: Title) {
		this.__title.setTitle(getFormattedPageTitle.go([appName, this.heading]));
	}

}
