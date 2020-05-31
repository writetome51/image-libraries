import { Component } from '@angular/core';
import { OperationStatusData as operationStatus }
	from '../../data-structures/runtime-state-data/operation-status.data';
import { HasSubscriptions } from '../../interfaces/has-subscriptions';
import { UnsubscribeOnDestroyComponent } from '@writetome51/unsubscribe-on-destroy-component';
import { CurrentRouteService } from '../services/current-route.service';
import { AllImagesRouteParamsSubscriptionHandlerService }
	from '../services/all-images-route-params-subscription-handler.service';


@Component({
	selector: 'all-images',
	templateUrl: './all-images.component.html'
})
export class AllImagesComponent extends UnsubscribeOnDestroyComponent implements HasSubscriptions {


	get gettingImages(): boolean {
		return operationStatus.waiting;
	}


	constructor(
		private __currentRoute: CurrentRouteService,
		private __allImagesRouteParamsSubscriptionHandler: AllImagesRouteParamsSubscriptionHandlerService
	) {
		super();

		// It looks better if the spinner shows up as soon as this component loads:
		// operationStatus.waiting = true;

		let routeParamsSubscription = this.__currentRoute.params$.subscribe(
			this.__allImagesRouteParamsSubscriptionHandler.handle()
		);

		this._subscriptions.push(routeParamsSubscription);
	}


}
