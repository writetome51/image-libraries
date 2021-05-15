import { Component } from '@angular/core';
import { CurrentRouteService } from '@services/current-route.service';
import { GetAllImagesRouteParamsObserverService } from
'./get-all-images-route-params-observer_service/get-all-images-route-params-observer.service';
import { GetPageTitleService as getPageTitle } from '@services/get-page-title.service';
import { RouteParametersSubscriberComponent }
	from '@abstract-components/route-parameters-subscriber.abstract.component';
import { Title } from '@angular/platform-browser';


@Component({
	selector: 'all-images',
	template: `
		<loading-content-section [heading]="heading">
			<all-images-viewer></all-images-viewer>
		</loading-content-section>
	`
})
export class AllImagesComponent extends RouteParametersSubscriberComponent {

	heading = 'All Images';


	constructor(
		title: Title,
		__currentRoute: CurrentRouteService,
		__getRouteParamsObserver: GetAllImagesRouteParamsObserverService
	) {
		super(__currentRoute, __getRouteParamsObserver);

		title.setTitle(getPageTitle.go([this.heading]));
	}

}
