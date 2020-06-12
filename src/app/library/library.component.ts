import { Component } from '@angular/core';
import { CurrentRouteService } from '../services/current-route.service';
import { LibraryPaginatorService } from '../services/paginator/library-paginator.service';
import { RequestedLibraryData as requestedLibrary }
	from '../../data-structures/runtime-state-data/requested-library.data';
import { UnsubscribeOnDestroyComponent } from '@writetome51/unsubscribe-on-destroy-component';
import { GetLibraryRouteParamsSubscriptionObserverService }
	from './get-library-route-params-subscription-observer.service';


@Component({
	selector: 'app-library',
	templateUrl: './library.component.html'
})
export class LibraryComponent extends UnsubscribeOnDestroyComponent {

	get name() {
		return requestedLibrary.name;
	}


	constructor(
		private __paginator: LibraryPaginatorService,
		private __currentRoute: CurrentRouteService,
		private __getRouteParamsSubscriptionHandler: GetLibraryRouteParamsSubscriptionObserverService
	) {
		super();

		console.log('constructor called');

		let routeParamsSubscription = this.__currentRoute.params$.subscribe(
			this.__getRouteParamsSubscriptionHandler.go()
		);
		this._subscriptions.push(routeParamsSubscription);
	}


	nextPage() {
		this.__paginator.set_currentPageNumber(this.__paginator.currentPageNumber + 1);
	}


	previousPage() {
		this.__paginator.set_currentPageNumber(this.__paginator.currentPageNumber - 1);
	}

}
