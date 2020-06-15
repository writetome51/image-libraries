import { Component } from '@angular/core';
import { OperationStatusData as operationStatus }
	from '../../data-structures/runtime-state-data/operation-status.data';
import { UnsubscribeOnDestroyComponent } from '@writetome51/unsubscribe-on-destroy-component';
import { CurrentRouteService } from '../services/current-route.service';
import { GetAllImagesRouteParamsSubscriptionObserverService }
	from './services/get-all-images-route-params-subscription-observer.service';
import { SelectedImageNamesData as selectedImageNames}
	from '../../data-structures/runtime-state-data/selected-image-names.data';


@Component({
	selector: 'all-images',
	templateUrl: './all-images.component.html'
})
export class AllImagesComponent extends UnsubscribeOnDestroyComponent {


	get gettingImages(): boolean {
		return operationStatus.waiting;
	}


	get imagesSelected(): boolean {
		return selectedImageNames.data.length > 0;
	}


	constructor(
		private __currentRoute: CurrentRouteService,
		private __getRouteParamsSubscriptionObserver: GetAllImagesRouteParamsSubscriptionObserverService
	) {
		super();

		operationStatus.waiting = true;

		let routeParamsSubscription = this.__currentRoute.params$.subscribe(
			this.__getRouteParamsSubscriptionObserver.go()
		);

		this._subscriptions.push(routeParamsSubscription);
	}


}
