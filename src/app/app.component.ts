import { AlertService } from './services/alert.service';
import { Component, HostListener } from '@angular/core';
import { LocalSessionIDService } from './services/local-data/local-session-id.service';
import { CurrentRouteService } from './services/current-route.service';
import { GoogleMapsApiKeyData } from './data-structures/read-only-data/google-maps-api-key.data';
import { ResetRuntimeStateDataToDefaultSettingsService as resetRuntimeStateData }
	from './services/reset-runtime-state-data-to-default-settings.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {

	title = 'Image Libraries';
	alert = AlertService;
	gMapsApiKey = GoogleMapsApiKeyData;


	// Adds keyup listener to document.
	@HostListener('document:keyup', ['$event'])
	onKeyup(event) {
		// logging event to console to see its contents:
		// console.log(event);
	}


	get sessionIDExists(): boolean {
		return (this.__localSessionID.get().length > 0);
	}


	constructor(
		private __localSessionID: LocalSessionIDService,
		private __currentRoute: CurrentRouteService
	) {
		resetRuntimeStateData.go();
	}

}
