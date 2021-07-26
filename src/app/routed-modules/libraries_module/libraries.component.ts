import { Component } from '@angular/core';
import { GetPageTitleService as getPageTitle } from '@services/get-page-title.service';
import { LibraryNamesData } from '@runtime-state-data/static-classes/auto-resettable.data';
import { NewLibraryBeingCreatedData } from '@runtime-state-data/new-library-being-created.data';
import { NewLibraryNameInputTextData } from '@runtime-state-data/new-library-name-input-text.data';
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

			<new-library-button></new-library-button>
			<new-library-form *ngIf="newLibraryBeingCreated.true"
				clearFormOnInit [inputData]="[newLibraryNameInputText]"
			></new-library-form>
		</div>
	`
})
export class LibrariesComponent {

	heading = 'Your Libraries';
	newLibraryBeingCreated = NewLibraryBeingCreatedData;
	newLibraryNameInputText = NewLibraryNameInputTextData;
	private __libraryNames = LibraryNamesData;


	set loadingStatus(value) {} // loadingStatus must be writable only to avoid error.

	get loadingStatus(): Waiter {
		return {waiting: noValue(this.__libraryNames.data)};
	}


	constructor(title: Title) {
		title.setTitle(getPageTitle.go([this.heading]));
	}

}
