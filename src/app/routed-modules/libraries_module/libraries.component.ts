import { Component } from '@angular/core';
import { GetPageTitleService as getPageTitle } from '@services/get-page-title.service';
import { NewLibraryData as newLibrary } from '@runtime-state-data/new-library.data';
import { noValue } from '@writetome51/has-value-no-value';
import { Title } from '@angular/platform-browser';
import { UserLibraryNamesData as libraryNames }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { Waiter } from '@interfaces/waiter.interface';


@Component({
	selector: 'app-libraries',
	template: `
		<div clearAlertsOnDestroy>

			<loading-content-section [heading]="heading" [loadingStatus]="loadingStatus">

				<library-names [data]="names"></library-names>

				<new-library-button></new-library-button>

				<new-library-form *ngIf="creatingNewLibrary" clearFormOnInit></new-library-form>

			</loading-content-section>

		</div>
	`
})
export class LibrariesComponent {

	heading = 'Your Libraries';

	set loadingStatus(value) {} // loadingStatus must be writable only to avoid error.

	get loadingStatus(): Waiter {
		return {waiting: noValue(libraryNames.data)};
	}


	get names() {
		return libraryNames.data;
	}


	get creatingNewLibrary(): boolean {
		return newLibrary.beingCreated;
	}


	constructor(title: Title) {
		title.setTitle(getPageTitle.go([this.heading]));
	}

}
