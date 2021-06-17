import { Component } from '@angular/core';
import { CurrentRouteService } from '@services/current-route.service';
import { GetAllImagesRouteParamsObserverService } from
'./get-all-images-route-params-observer_service/get-all-images-route-params-observer.service';
import { GetPageTitleService as getPageTitle } from '@services/get-page-title.service';
import { RouteParametersSubscriberDirective }
	from '@app/shared/abstract-directives/route-parameters-subscriber.abstract.directive';
import { Title } from '@angular/platform-browser';
import { BackgroundExecutionStatusData } from '@runtime-state-data/background-execution-status.data';


@Component({
	selector: 'all-images',
	template: `
		<loading-content-section [heading]="heading" [loadingStatus]="backgroundExecutionStatus">
			<all-images-viewer></all-images-viewer>
		</loading-content-section>
	`
})
export class AllImagesComponent extends RouteParametersSubscriberDirective {

	heading = 'All Images';
	backgroundExecutionStatus = BackgroundExecutionStatusData;


	constructor(
		title: Title,
		__currentRoute: CurrentRouteService,
		__getRouteParamsObserver: GetAllImagesRouteParamsObserverService
	) {
		super(__currentRoute, __getRouteParamsObserver);

		title.setTitle(getPageTitle.go([this.heading]));
	}

}
