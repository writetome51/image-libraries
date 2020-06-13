import { Component } from '@angular/core';
import { CurrentRouteService } from '../services/current-route.service';
import { LibraryPaginatorService } from '../services/app-paginator/library-paginator.service';
import { RequestedLibraryData as requestedLibrary }
	from '../../data-structures/runtime-state-data/requested-library.data';
import { UnsubscribeOnDestroyComponent } from '@writetome51/unsubscribe-on-destroy-component';
import { GetLibraryRouteParamsSubscriptionObserverService }
	from './get-library-route-params-subscription-observer.service';


@Component({
	selector: 'app-library',
	template: `
		<header><h2>{{name}}</h2></header>
		<library-viewer></library-viewer>
		<delete-library-button></delete-library-button>
		<pagination-controls></pagination-controls>
	`
})
export class LibraryComponent extends UnsubscribeOnDestroyComponent {

	get name() {
		return requestedLibrary.name;
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
