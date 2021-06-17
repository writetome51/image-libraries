import { Component } from '@angular/core';
import { GetPageTitleService as getPageTitle } from '@services/get-page-title.service';
import { LibraryNamesData } from '@runtime-state-data/static-classes/auto-resettable.data';
import { noValue } from '@writetome51/has-value-no-value';
import { Title } from '@angular/platform-browser';
import { Waiter } from '@interfaces/waiter.interface';


@Component({
	selector: 'app-libraries',
	template: `
		<div clearAlertsOnDestroy>
			<loading-content-section [heading]="heading" [loadingStatus]="loadingStatus">

				<libraries-viewer></libraries-viewer>

			</loading-content-section>
		</div>
	`
})
export class LibrariesComponent {

	heading = 'Your Libraries';
	private __libraryNames = LibraryNamesData;

	set loadingStatus(value) {} // loadingStatus must be writable only to avoid error.

	get loadingStatus(): Waiter {
		return {waiting: noValue(this.__libraryNames.data)};
	}


	constructor(title: Title) {
		title.setTitle(getPageTitle.go([this.heading]));
	}

}
