import { AppMessageCenterVisibilityService } from './app-message-center-visibility.service';
import { appName } from '@string-constants/app-name';
import { Component, HostListener } from '@angular/core';
import { CurrentPageTitleData as currentPageTitle }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { isString } from '@writetome51/is-string-not-string';
import { ResetRuntimeStateDataToDefaultSettingsService }
	from '@services/reset-runtime-state-data-to-default-settings.service';
import { SessionIDInBrowserStorageService }
	from '@browser-storage/session-id-in-browser-storage.service';
import { Title } from '@angular/platform-browser';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {

	siteHeading = appName;
	messageCenterVisibility = AppMessageCenterVisibilityService;


	get loggedIn(): boolean {
		const sessionID = this.__sessionIDInBrowser.get();
		return (isString(sessionID) && sessionID.length > 0);
	}


	get messageCenterToBeVisible(): boolean {
		return this.messageCenterVisibility.visible;
	}


	constructor(
		private __sessionIDInBrowser: SessionIDInBrowserStorageService,
		private __resetRuntimeStateDataToDefaults: ResetRuntimeStateDataToDefaultSettingsService,
		private __title: Title
	) {
		this.__resetRuntimeStateDataToDefaults.go();
		this.__setDefaultPageTitle();
	}


	hideMessageCenter() {
		this.messageCenterVisibility.hide();
	}


	private __setDefaultPageTitle() {
		// This is the only place where you can set the title with
		// `title.setTitle(currentPageTitle.data)`.  In all other places, set the title with
		// `title.setTitle(getPageTitle.go(stringArray))`

		this.__title.setTitle(currentPageTitle.data);
	}


	// Adds keyup listener to document.
	@HostListener('document:keyup', ['$event'])
	onKeyup(event) {
		// console.log(event);
	}

}
