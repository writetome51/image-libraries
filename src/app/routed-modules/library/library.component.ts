import { BackgroundExecutionStatusData as executionStatus }
	from '@runtime-state-data/background-execution-status.data';
import { Component } from '@angular/core';
import { CurrentRouteService } from '@services/current-route.service';
import { GetLibraryRouteParamsObserverService }
	from './services/get-library-route-params-observer/get-library-route-params-observer.service';
import { RequestedLibraryData as requestedLibrary }
	from '@runtime-state-data/requested-library.data';
import { UnsubscribeOnDestroyDirective } from '@writetome51/unsubscribe-on-destroy-directive';
import { ModuleTitleData as moduleTitle } from './module-title.data';
import { Title } from '@angular/platform-browser';


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
		private __getRouteParamsObserver: GetLibraryRouteParamsObserverService,
		private __title: Title
	) {
		super();
		this.__title.setTitle(moduleTitle.data);

		let routeParamsSubscription = this.__currentRoute.params$.subscribe(
			this.__getRouteParamsObserver.go()
		);
		this._subscriptions.push(routeParamsSubscription);
	}

}
