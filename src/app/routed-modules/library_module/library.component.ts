import { BackgroundExecutionStatusData }
	from '@runtime-state-data/background-execution-status.data';
import { Component } from '@angular/core';
import { RequestedLibraryData as requestedLibrary }
	from '@runtime-state-data/requested-library.data';
import { RouteParametersSubscriberDirective }
	from '@abstract-directives/route-parameters-subscriber.abstract.directive';
import { RunTasksAfterLibraryRouteParamsReceivedService }
	from './run-tasks-after-library-route-params-received_service/run-tasks-after-library-route-params-received.service';
import { SubscribableCurrentRouteParamsService }
	from '@services/subscribable-current-route-params.service';


@Component({
	selector: 'app-library',
	template: `
		<loading-content-section [heading]="heading" [loadingStatus]="backgroundExecutionStatus">
			<library-viewer></library-viewer>
		</loading-content-section>
	`
})
export class LibraryComponent extends RouteParametersSubscriberDirective {

	backgroundExecutionStatus = BackgroundExecutionStatusData;

	get heading() {
		return requestedLibrary.name;
	}


	constructor(
		__currentRouteParams$: SubscribableCurrentRouteParamsService,
		__runTasksAfterRouteParamsReceived: RunTasksAfterLibraryRouteParamsReceivedService
	) {
		super(__currentRouteParams$, __runTasksAfterRouteParamsReceived);
	}

}
