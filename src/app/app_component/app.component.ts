import { AppMessageCenterVisibilityService } from './app-message-center-visibility.service';
import { Component, HostListener } from '@angular/core';
import { CurrentPageTitleData as currentPageTitle }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { ResetRuntimeStateDataToDefaultSettingsService }
	from '@services/reset-runtime-state-data-to-default-settings.service';
import { Title } from '@angular/platform-browser';


@Component({
	selector: 'app-root',
	template: `
		<div class="container-fluid" style="text-align:center;">
			<app-header></app-header>

			<main>
				<app-message-center *ngIf="messageCenterVisibility.visible"
					(click)="messageCenterVisibility.hide()"
				></app-message-center>

				<router-outlet></router-outlet>
			</main>

			<app-footer></app-footer>
		</div>
	`
})
export class AppComponent {

	messageCenterVisibility = AppMessageCenterVisibilityService;


	constructor(
		private __resetRuntimeStateDataToDefaults: ResetRuntimeStateDataToDefaultSettingsService,
		private __title: Title
	) {
		this.__resetRuntimeStateDataToDefaults.go();
		this.__setDefaultPageTitle();
	}


	private __setDefaultPageTitle() {
		// This is the only place where you can set the <title> with
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
