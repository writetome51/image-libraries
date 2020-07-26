import { Component } from '@angular/core';
import { UnsubscribeOnDestroyComponent } from '@writetome51/unsubscribe-on-destroy-component';
import { BackgroundProcessingStatusData as operationStatus }
	from '../shared/data/runtime-state/background-processing-status.data';
import { CurrentRouteService } from '../shared/services/current-route.service';
import { GetAllImagesRouteParamsSubscriptionObserverService }
	// tslint:disable-next-line:max-line-length
	from './services/get-all-images-route-params-subscription-observer/get-all-images-route-params-subscription-observer.service';


@Component({
	selector: 'all-images',
	templateUrl: './all-images.component.html'
})
export class AllImagesComponent extends UnsubscribeOnDestroyComponent {

	get gettingImages(): boolean {
		return operationStatus.waiting;
	}


	constructor(
		private __currentRoute: CurrentRouteService,
		private __getRouteParamsSubscriptionObserver:
			GetAllImagesRouteParamsSubscriptionObserverService
	) {
		super();

		operationStatus.waiting = true;

		let routeParamsSubscription = this.__currentRoute.params$.subscribe(
			this.__getRouteParamsSubscriptionObserver.go()
		);

		this._subscriptions.push(routeParamsSubscription);
	}

}
