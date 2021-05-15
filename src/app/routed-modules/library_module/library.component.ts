import { Component } from '@angular/core';
import { CurrentRouteService } from '@services/current-route.service';
import { GetLibraryRouteParamsObserverService }
	from './get-library-route-params-observer_service/get-library-route-params-observer.service';
import { RequestedLibraryData as requestedLibrary }
	from '@runtime-state-data/requested-library.data';
import { RouteParametersSubscriberComponent }
	from '@abstract-components/route-parameters-subscriber.abstract.component';


@Component({
	selector: 'app-library',
	template: `
		<loading-content-section [heading]="heading">
			<library-viewer></library-viewer>
		</loading-content-section>
	`
})
export class LibraryComponent extends RouteParametersSubscriberComponent {

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
