import { BackgroundExecutionStatusData }
	from '@runtime-state-data/background-execution-status.data';
import { Component } from '@angular/core';
import { CurrentRouteService } from '@services/current-route.service';
import { GetLibraryRouteParamsObserverService }
	from './get-library-route-params-observer_service/get-library-route-params-observer.service';
import { RequestedLibraryData as requestedLibrary }
	from '@runtime-state-data/requested-library.data';
import { RouteParametersSubscriberDirective }
	from '@app/shared/abstract-directives/route-parameters-subscriber.abstract.directive';


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
		__getRouteParamsObserver: GetLibraryRouteParamsObserverService
	) {
		super(__currentRoute, __getRouteParamsObserver);
	}

}
