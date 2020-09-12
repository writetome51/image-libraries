import { Component } from '@angular/core';
import { UnsubscribeOnDestroyComponent } from '@writetome51/unsubscribe-on-destroy-component';
import { BackgroundProcessingStatusData as processingStatus }
	from '@runtime-state-data/background-processing-status.data';
import { CurrentRouteService } from '@services/current-route.service';
import { GetAllImagesRouteParamsObserverService }
	from './services/get-all-images-route-params-observer/get-all-images-route-params-observer.service';


@Component({
	selector: 'all-images',
	templateUrl: './all-images.component.html'
})
export class AllImagesComponent extends UnsubscribeOnDestroyComponent {

	get gettingImages(): boolean {
		return processingStatus.waiting;
	}


	constructor(
		private __currentRoute: CurrentRouteService,
		private __getRouteParamsObserver: GetAllImagesRouteParamsObserverService
	) {
		super();

		processingStatus.waiting = true;

		let routeParamsSubscription = this.__currentRoute.params$.subscribe(
			this.__getRouteParamsObserver.go()
		);

		this._subscriptions.push(routeParamsSubscription);
	}

}
