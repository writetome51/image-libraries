import { AlertData } from '@runtime-state-data/static-classes/alert.data';
import { AppNameData as appName } from '@read-only-data/app-name.data';
import { AssureUserDataLoadedService }
	from './assure-user-data-loaded_service/assure-user-data-loaded.service';
import { Component, HostListener } from '@angular/core';
import { hasValue } from '@writetome51/has-value-no-value';
import { ResetRuntimeStateDataToDefaultSettingsService as resetRuntimeStateDataToDefaults }
	from '@services/reset-runtime-state-data-to-default-settings.service';
import { SessionIDInBrowserStorageService }
	from '@encrypted-item-in-browser-storage/session-id-in-browser-storage.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {

	siteHeading = appName.data;
	alert = AlertData;


	get loggedIn(): boolean {
		return (hasValue(this.__sessionIDInBrowser.get()));
	}


	constructor(
		private __sessionIDInBrowser: SessionIDInBrowserStorageService,
		private __assureUserDataLoaded: AssureUserDataLoadedService
	) {
		resetRuntimeStateDataToDefaults.go();
		if (this.loggedIn) this.__assureUserDataLoaded.go();
	}


	// Adds keyup listener to document.
	@HostListener('document:keyup', ['$event'])
	onKeyup(event) {
		// logging event to console to see its contents:
		// console.log(event);
	}


}
