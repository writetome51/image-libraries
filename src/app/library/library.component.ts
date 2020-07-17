import { Component } from '@angular/core';
import { CurrentRouteService } from '../services/current-route.service';
import { GetLibraryRouteParamsSubscriptionObserverService }
	// tslint:disable-next-line:max-line-length
	from './services/get-library-route-params-subscription-observer/get-library-route-params-subscription-observer.service';
import { ImageTotalData as imageTotal}
	from '../../data-structures/runtime-state-data/static-classes/image-total.data';
import { LibraryPaginatorService } from './services/library-paginator/library-paginator.service';
import { OperationStatusData as operationStatus }
	from '../../data-structures/runtime-state-data/operation-status.data';
import { RequestedLibraryData as requestedLibrary }
	from '../../data-structures/runtime-state-data/requested-library.data';
import { UnsubscribeOnDestroyComponent } from '@writetome51/unsubscribe-on-destroy-component';


@Component({
	selector: 'app-library',
	templateUrl: './library.component.html'
})
export class LibraryComponent extends UnsubscribeOnDestroyComponent {

	get name() {
		return requestedLibrary.name;
	}


	get gettingImages(): boolean {
		return operationStatus.waiting;
	}


	get totalImages(){
		return imageTotal.data;
	}


	constructor(
		private __paginator: LibraryPaginatorService,
		private __currentRoute: CurrentRouteService,
		private __getRouteParamsSubscriptionObserver: GetLibraryRouteParamsSubscriptionObserverService
	) {
		super();

		let routeParamsSubscription = this.__currentRoute.params$.subscribe(
			this.__getRouteParamsSubscriptionObserver.go()
		);
		this._subscriptions.push(routeParamsSubscription);
	}


}
