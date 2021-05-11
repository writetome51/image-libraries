import { Component } from '@angular/core';
import { GetPageTitleService as getPageTitle } from '@services/get-page-title.service';
import { NewLibraryData as newLibrary } from '@runtime-state-data/new-library.data';
import { Title } from '@angular/platform-browser';


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

	constructor(title: Title) {
		title.setTitle(getPageTitle.go([this.heading]));
	}

}
