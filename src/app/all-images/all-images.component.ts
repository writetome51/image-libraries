import { BackgroundExecutionStatusData as processingStatus }
	from '@runtime-state-data/background-execution-status.data';
import { Component } from '@angular/core';
import { CurrentRouteService } from '@services/current-route.service';
import { GetAllImagesRouteParamsObserverService }
	from './services/get-all-images-route-params-observer/get-all-images-route-params-observer.service';
import { AssureLibrariesAreLoadedService }
	from '@services/assure-libraries-are-loaded.service';
import { UnsubscribeOnDestroyDirective } from '@writetome51/unsubscribe-on-destroy-directive';


@Component({
	selector: 'all-images',
	templateUrl: './all-images.component.html'
})
export class AllImagesComponent extends UnsubscribeOnDestroyDirective {

	heading = 'All Images';


	get gettingImages(): boolean {
		return processingStatus.waiting;
	}


	constructor(
		private __assureLibrariesAreLoaded: AssureLibrariesAreLoadedService,
		private __currentRoute: CurrentRouteService,
		private __getRouteParamsObserver: GetAllImagesRouteParamsObserverService
	) {
		super();

		processingStatus.waiting = true;

		this.__assureLibrariesAreLoaded.go().then(
			() => {
				let routeParamsSubscription = this.__currentRoute.params$.subscribe(
					this.__getRouteParamsObserver.go()
				);

				this._subscriptions.push(routeParamsSubscription);
			}
		);
	}

}
