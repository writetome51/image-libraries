import { BackgroundExecutionStatusData as executionStatus }
	from '@runtime-state-data/background-execution-status.data';
import { Component } from '@angular/core';
import { CurrentRouteService } from '@services/current-route.service';
import { GetLibraryRouteParamsObserverService }
	from './services/get-library-route-params-observer/get-library-route-params-observer.service';
import { ImageTotalData as imageTotal }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { RequestedLibraryData as requestedLibrary }
	from '@runtime-state-data/requested-library.data';
import { UnsubscribeOnDestroyDirective } from '@writetome51/unsubscribe-on-destroy-directive';
import { AssureLibrariesAreStoredLocallyService }
	from '@services/assure-libraries-are-stored-locally.service';


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


	get imageTotal() {
		return imageTotal.data;
	}


	constructor(
		private __assureLibrariesAreStoredLocally: AssureLibrariesAreStoredLocallyService,
		private __currentRoute: CurrentRouteService,
		private __getRouteParamsObserver: GetLibraryRouteParamsObserverService
	) {
		super();

		this.__assureLibrariesAreStoredLocally.go().then(
			() => {
				let routeParamsSubscription = this.__currentRoute.params$.subscribe(
					this.__getRouteParamsObserver.go()
				);
				this._subscriptions.push(routeParamsSubscription);
			}
		);

	}

}
