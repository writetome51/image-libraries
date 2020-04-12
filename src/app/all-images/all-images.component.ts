import { AllImagesJumpToPageNumberInputService }
	from '../services/validating-input/all-images-jump-to-page-number-input.service';
import { Component } from '@angular/core';
import { DBImage } from '../interfaces/db-image';
import { AllImagesPaginatorService } from '../services/paginator/all-images-paginator.service';
import { CurrentRouteService } from '../services/current-route.service';
import { OperationStatusData as operationStatus }
	from '../data-structures/runtime-state-data/operation-status.data';
import { HasSubscriptions } from '../interfaces/has-subscriptions';
import { UnsubscribeOnDestroyComponent } from '@writetome51/unsubscribe-on-destroy-component';
import { AllImagesPageRouteSubscriptionHandlerService }
	from '../services/all-images-page-route-subscription-handler.service';


@Component({
	selector: 'all-images',
	templateUrl: './all-images.component.html'
})
export class AllImagesComponent extends UnsubscribeOnDestroyComponent
	implements HasSubscriptions {


	get gettingBatch(): boolean {
		return operationStatus.waiting;
	}


	get images(): DBImage[] {
		// If paginator.currentPage is undefined it triggers error, so we catch it:
		try {
			return this.allImagesPaginator.currentPage;
		}
		catch (e) {
			return undefined;
		}
	}


	constructor(
		public allImagesPaginator: AllImagesPaginatorService,
		public allImagesJumpToPageNumberInput: AllImagesJumpToPageNumberInputService,
		private __currentRoute: CurrentRouteService,
		private __subscriptionHandler: AllImagesPageRouteSubscriptionHandlerService
	) {
		super();

		// It looks better if the spinner shows up as soon as this component loads:
		operationStatus.waiting = true;

		let routeParamsSubscrp = this.__currentRoute.params$.subscribe(
			async (params) => {
				await this.__subscriptionHandler.handle(params);
			}
		);
		this._subscriptions.push(routeParamsSubscrp);

	}


}
