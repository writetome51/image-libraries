import { BackgroundExecutionStatusData as executionStatus }
	from '@runtime-state-data/background-execution-status.data';
import { Component } from '@angular/core';
import { CurrentRouteService } from '@services/current-route.service';
import { GetAllImagesRouteParamsObserverService }
	from './get-all-images-route-params-observer_service/get-all-images-route-params-observer.service';
import { RouteParametersSubscriberComponent }
	from '@abstract-components/route-parameters-subscriber.abstract.component';
import { Title } from '@angular/platform-browser';
import { GetPageTitleService as getPageTitle } from '@services/get-page-title.service';


@Component({
	selector: 'all-images',
	template: `
		<header><h2>{{heading}}</h2></header>

		<big-loading-spinner *ngIf="gettingImages"></big-loading-spinner>

		<all-images-viewer *ngIf="!(gettingImages)"></all-images-viewer>
	`
})
export class AllImagesComponent extends RouteParametersSubscriberComponent {

	heading = 'All Images';


	get gettingImages(): boolean {
		return executionStatus.waiting;
	}


	constructor(
		private __title: Title,
		__currentRoute: CurrentRouteService,
		__getRouteParamsObserver: GetAllImagesRouteParamsObserverService
	) {
		super(__currentRoute, __getRouteParamsObserver);

		executionStatus.waiting = true;
		this.__title.setTitle(getPageTitle.go([this.heading]));
	}

}
