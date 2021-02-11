import { BackgroundExecutionStatusData as executionStatus }
	from '@runtime-state-data/background-execution-status.data';
import { Component } from '@angular/core';
import { CurrentRouteService } from '@services/current-route.service';
import { GetAllImagesRouteParamsObserverService }
	from './services/get-all-images-route-params-observer/get-all-images-route-params-observer.service';
import { UnsubscribeOnDestroyDirective } from '@writetome51/unsubscribe-on-destroy-directive';
import { ModuleTitleData as moduleTitle } from './module-title.data';
import { Title } from '@angular/platform-browser';


@Component({
	selector: 'all-images',
	templateUrl: './all-images.component.html'
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
