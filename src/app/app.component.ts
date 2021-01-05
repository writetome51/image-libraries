import { AlertData } from '@runtime-state-data/static-classes/alert.data';
import { AppNameData as appName } from '@read-only-data/app-name.data';
import { Component, HostListener } from '@angular/core';
import { hasValue } from '@writetome51/has-value-no-value';
import { LocalSessionIDService }
	from '@services/item-in-browser-storage/local-session-id.service';
import { ResetRuntimeStateDataToDefaultSettingsService as resetRuntimeStateDataToDefaults }
	from '@services/reset-runtime-state-data-to-default-settings.service';
import { Title } from '@angular/platform-browser';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {

	siteHeading = appName.data;
	alert = AlertData;


	get loggedIn(): boolean {
		return (hasValue(this.__localSessionID.get()));
	}


	constructor(
		private __localSessionID: LocalSessionIDService,
		private __title: Title
	) {
		resetRuntimeStateDataToDefaults.go();

		this.__title.setTitle(appName.data);
	}


	// Adds keyup listener to document.
	@HostListener('document:keyup', ['$event'])
	onKeyup(event) {
		// logging event to console to see its contents:
		// console.log(event);
	}


}
