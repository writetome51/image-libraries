import { Component, OnInit } from '@angular/core';
import { DBImage } from '../../interfaces/db-image';
import { noValue } from '@writetome51/has-value-no-value';
import { not } from '@writetome51/not';
import { LoadedImagesData as loadedImages }
	from '../../data-structures/runtime-state-data/static-classes/loaded-images.data';
import { AllImagesPaginatorService } from '../../services/paginator/all-images-paginator.service';
import { AllImagesStatusData as allImagesStatus }
	from '../../data-structures/runtime-state-data/static-classes/all-images-status.data';
import { URLParamIDData as paramID } from '../../data-structures/read-only-data/url-param-id.data';
import { CurrentRouteService } from '../../services/current-route.service';
import { Subscription } from 'rxjs';
import { OperationStatusData as operationStatus }
	from '../../data-structures/runtime-state-data/operation-status.data';
import { HasSubscriptions } from '../../interfaces/has-subscribtions';
import { UnsubscribeOnDestroyComponent } from '@writetome51/unsubscribe-on-destroy-component';


@Component({
	selector: 'all-images',
	templateUrl: './all-images.component.html'
})
export class AllImagesComponent extends UnsubscribeOnDestroyComponent
	implements OnInit, HasSubscriptions {


	private __images;
	private __page: number;


	get gettingBatch(): boolean {
		return operationStatus.waiting;
	}


	get images(): DBImage[] {
		return this.__images;
	}


	constructor(
		public allImagesPaginator: AllImagesPaginatorService,
		private __currentRoute: CurrentRouteService
	) {
		super();

		// It looks better if the spinner shows up as soon as this component loads:
		operationStatus.waiting = true;
	}


	async ngOnInit() {
		if (noValue(loadedImages.data) || not(allImagesStatus.loaded)) {
			await this.allImagesPaginator.reset();
			allImagesStatus.loaded = true;
		}

		let routeParamsSubscription = this.__currentRoute.params$.subscribe(
			async (params) => {
				this.__page = Number(params[paramID.pageNumber]);
				await this.allImagesPaginator.set_currentPageNumber(this.__page);
				this.__images = this.allImagesPaginator.currentPage;
			}
		);
		this._subscriptions.push(routeParamsSubscription);
	}


}
