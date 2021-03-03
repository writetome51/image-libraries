import { BackgroundExecutionStatusData as executionStatus }
	from '@runtime-state-data/background-execution-status.data';
import { Component } from '@angular/core';
import { CurrentRouteService } from '@services/current-route.service';
import { GetLibraryRouteParamsObserverService }
	from './get-library-route-params-observer_service/get-library-route-params-observer.service';
import { RequestedLibraryData as requestedLibrary }
	from '@runtime-state-data/requested-library.data';
import { UnsubscribeOnDestroyDirective } from '@writetome51/unsubscribe-on-destroy-directive';


@Component({
	selector: 'app-library',
	templateUrl: './library.component.html'
})
export class LibraryComponent extends UnsubscribeOnDestroyDirective {

	get name() {
		return requestedLibrary.name;
	}


	get gettingImages(): boolean {
		return executionStatus.waiting;
	}


	constructor(
		private __currentRoute: CurrentRouteService,
		private __getRouteParamsObserver: GetLibraryRouteParamsObserverService
	) {
		super();

		let routeParamsSubscription = this.__currentRoute.params$.subscribe(
			this.__getRouteParamsObserver.go()
		);
		this._subscriptions.push(routeParamsSubscription);
	}

}
