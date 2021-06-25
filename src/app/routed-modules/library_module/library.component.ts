import { BackgroundExecutionStatusData }
	from '@runtime-state-data/background-execution-status.data';
import { Component } from '@angular/core';
import { CurrentRouteService } from '@services/current-route.service';
import { RequestedLibraryData as requestedLibrary }
	from '@runtime-state-data/requested-library.data';
import { RouteParametersSubscriberDirective }
	from '@app/shared/abstract-directives/route-parameters-subscriber.abstract.directive';
import { RunTasksAfterLibraryRouteParamsReceivedService }
	from './run-tasks-after-library-route-params-received_service/run-tasks-after-library-route-params-received.service';


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
		__currentRoute: CurrentRouteService,
		__runTasksAfterRouteParamsReceived: RunTasksAfterLibraryRouteParamsReceivedService
	) {
		super(__currentRoute, __runTasksAfterRouteParamsReceived);
	}

}
