import { AlertService } from '@services/alert.service';
import { appName } from '@string-constants/app-name';
import { Component, HostListener } from '@angular/core';
import { hasValue } from '@writetome51/has-value-no-value';
import { ResetRuntimeStateDataToDefaultSettingsService }
	from '@services/reset-runtime-state-data-to-default-settings.service';
import { SessionIDInBrowserStorageService }
	from '@browser-storage/session-id-in-browser-storage.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {

	siteHeading = appName;
	alert = AlertService;


	get loggedIn(): boolean {
		return (hasValue(this.__sessionIDInBrowser.get()));
	}


	constructor(
		private __sessionIDInBrowser: SessionIDInBrowserStorageService,
		private __resetRuntimeStateDataToDefaults: ResetRuntimeStateDataToDefaultSettingsService
	) {
		this.__resetRuntimeStateDataToDefaults.go();
	}


	// Adds keyup listener to document.
	@HostListener('document:keyup', ['$event'])
	onKeyup(event) {
		// logging event to console to see its contents:
		// console.log(event);
	}

}
