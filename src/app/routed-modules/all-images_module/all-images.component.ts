import { BackgroundExecutionStatusData }
	from '@runtime-state-data/background-execution-status.data';
import { Component } from '@angular/core';
import { CurrentRouteService } from '@services/current-route.service';
import { GetPageTitleService as getPageTitle } from '@services/get-page-title.service';
import { RouteParametersSubscriberDirective }
	from '@abstract-directives/route-parameters-subscriber.abstract.directive';
import { RunTasksAfterAllImagesRouteParamsReceivedService }
	from './run-tasks-after-all-images-route-params-received_service/run-tasks-after-all-images-route-params-received.service';
import { Title } from '@angular/platform-browser';
import { SubscribableCurrentRouteParamsService } from '@services/subscribable-current-route-params.service';


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
		__currentRouteParams$: SubscribableCurrentRouteParamsService,
		__runTasksAfterRouteParamsReceived: RunTasksAfterAllImagesRouteParamsReceivedService
	) {
		super(__currentRouteParams$, __runTasksAfterRouteParamsReceived);

		title.setTitle(getPageTitle.go([this.heading]));
	}

}
