import { BackgroundExecutionStatusData as executionStatus }
	from '@runtime-state-data/background-execution-status.data';
import { Component } from '@angular/core';
import { CurrentRouteService } from '@services/current-route.service';
import { GetAllImagesRouteParamsObserverService }
	from './get-all-images-route-params-observer_service/get-all-images-route-params-observer.service';
import { AllImagesModuleTitleData as moduleTitle } from './all-images-module-title.data';
import { Title } from '@angular/platform-browser';
import { UnsubscribeOnDestroyDirective } from '@writetome51/unsubscribe-on-destroy-directive';


@Component({
	selector: 'all-images',
	template: `
		<header><h2>{{heading}}</h2></header>

		<big-loading-spinner *ngIf="gettingImages"></big-loading-spinner>

		<all-images-viewer *ngIf="!(gettingImages)"></all-images-viewer>
	`
})
export class AllImagesComponent extends UnsubscribeOnDestroyDirective {

	heading = 'All Images';


	get gettingImages(): boolean {
		return executionStatus.waiting;
	}


	constructor(
		private __currentRoute: CurrentRouteService,
		private __getRouteParamsObserver: GetAllImagesRouteParamsObserverService,
		private __title: Title
	) {
		super();
		this.__title.setTitle(moduleTitle.data);

		executionStatus.waiting = true;

		let routeParamsSubscription = this.__currentRoute.params$.subscribe(
			this.__getRouteParamsObserver.go()
		);
		this._subscriptions.push(routeParamsSubscription);
	}

}
