import { BackgroundProcessingStatusData as processingStatus }
	from '@runtime-state-data/background-processing-status.data';
import { Component } from '@angular/core';
import { CurrentRouteService } from '@services/current-route.service';
import { GetLibraryRouteParamsObserverService }
	from './services/get-library-route-params-observer/get-library-route-params-observer.service';
import { ImageTotalData as imageTotal} from '@runtime-state-data/static-classes/auto-resettable.data';
import { LibraryPaginatorService } from './services/library-paginator/library-paginator.service';
import { RequestedLibraryData as requestedLibrary } from '@runtime-state-data/requested-library.data';
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
		return processingStatus.waiting;
	}


	get totalImages(){
		return imageTotal.data;
	}


	constructor(
		private __paginator: LibraryPaginatorService,
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
