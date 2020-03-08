import { Component, OnDestroy, OnInit } from '@angular/core';
import { DBImage } from '../../interfaces/db-image';
import { noValue, hasValue } from '@writetome51/has-value-no-value';
import { not } from '@writetome51/not';
import { LoadedImagesData as loadedImages }
	from '../../data-structures/runtime-state-data/static-classes/loaded-images.data';
import { AllImagesPaginatorService } from '../../services/paginator/all-images-paginator.service';
import { AllImagesStatusData as allImagesStatus }
	from '../../data-structures/runtime-state-data/static-classes/all-images-status.data';
import { URLParamIDData as paramID } from '../../data-structures/read-only-data/url-param-id.data';
import { CurrentRouteService } from '../../services/current-route.service';
import { Subscription } from 'rxjs';
import { OperationStatusData } from '../../data-structures/runtime-state-data/operation-status.data';


@Component({
	selector: 'all-images',
	templateUrl: './all-images.component.html'
})
export class AllImagesComponent implements OnInit, OnDestroy {

	private __images;
	private __page: number;
	private __routeParamsSubscription: Subscription;


	get gettingBatch(): boolean {
		return OperationStatusData.waiting;
	}


	get images(): DBImage[] {
		return this.__images;
	}


	get nextPage() {
		return this.__page + 1;
	}


	constructor(
		private __allImagesPaginator: AllImagesPaginatorService,
		private __currentRoute: CurrentRouteService
	) {
	}


	async ngOnInit() {
		if (noValue(loadedImages.data) || not(allImagesStatus.loaded)) {
			await this.__allImagesPaginator.reset();
			allImagesStatus.loaded = true;
		}

		this.__routeParamsSubscription = this.__currentRoute.params$.subscribe(
			async (params) => {
				this.__page = Number(params[paramID.pageNumber]);
				await this.__allImagesPaginator.set_currentPageNumber(this.__page);
				this.__images = this.__allImagesPaginator.currentPage;
			}
		);
	}


	ngOnDestroy(): void {
		this.__routeParamsSubscription.unsubscribe();
	}

}
