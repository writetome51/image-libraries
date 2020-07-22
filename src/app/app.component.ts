import { AlertData } from '../data-structures/runtime-state-data/static-classes/alert.data';
import { Component, HostListener } from '@angular/core';
import { LocalSessionIDService } from './shared/services/local-data/local-session-id.service';
import { ResetRuntimeStateDataToDefaultSettingsService as resetRuntimeStateDataToDefaults }
	from './shared/services/reset-runtime-state-data-to-default-settings.service';
import { Title } from '@angular/platform-browser';
import { AppNameData as appName } from '../data-structures/read-only-data/app-name.data';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {

	siteHeading = appName.data;
	alert = AlertData;


	// Adds keyup listener to document.
	@HostListener('document:keyup', ['$event'])
	onKeyup(event) {
		// logging event to console to see its contents:
		// console.log(event);
	}


	get sessionIDExists(): boolean {
		return (this.__localSessionID.get().length > 0);
	}


	constructor(private __localSessionID: LocalSessionIDService, private __title: Title) {
		resetRuntimeStateDataToDefaults.go();

		this.__title.setTitle(appName.data);
	}


}
