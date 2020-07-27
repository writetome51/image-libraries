import { Component } from '@angular/core';
import { UnsubscribeOnDestroyComponent } from '@writetome51/unsubscribe-on-destroy-component';
import { BackgroundProcessingStatusData as processingStatus }
	from '@runtime-state-data/background-processing-status.data';
import { CurrentRouteService } from '@services/current-route.service';
import { GetAllImagesRouteParamsSubscriptionObserverService }
	// tslint:disable-next-line:max-line-length
	from './services/get-all-images-route-params-subscription-observer/get-all-images-route-params-subscription-observer.service';


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
		private __getRouteParamsSubscriptionObserver:
			GetAllImagesRouteParamsSubscriptionObserverService
	) {
		super();

		processingStatus.waiting = true;

		let routeParamsSubscription = this.__currentRoute.params$.subscribe(
			this.__getRouteParamsSubscriptionObserver.go()
		);

		this._subscriptions.push(routeParamsSubscription);
	}

}
